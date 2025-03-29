import os
from PIL import Image
import shutil

def compress_images(source_dir, output_dir, quality=80):
    """
    Nén tất cả hình ảnh trong thư mục nguồn và lưu vào thư mục đích
    quality: chất lượng nén từ 1-100, 80-85 thường là tốt nhất
    """
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    # Sao chép cấu trúc thư mục từ source_dir sang output_dir
    for root, dirs, _ in os.walk(source_dir):
        for directory in dirs:
            src_path = os.path.join(root, directory)
            # Tạo đường dẫn tương đối
            rel_path = os.path.relpath(src_path, source_dir)
            dst_path = os.path.join(output_dir, rel_path)
            if not os.path.exists(dst_path):
                os.makedirs(dst_path)
    
    # Tìm và nén tất cả các ảnh
    count = 0
    total_before = 0
    total_after = 0
    
    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.bmp')):
                input_path = os.path.join(root, file)
                # Tạo đường dẫn tương đối
                rel_path = os.path.relpath(os.path.join(root, file), source_dir)
                output_path = os.path.join(output_dir, rel_path)
                
                # Đảm bảo thư mục đích tồn tại
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                # Lấy kích thước trước khi nén
                before_size = os.path.getsize(input_path)
                total_before += before_size
                
                try:
                    with Image.open(input_path) as img:
                        # Giữ nguyên định dạng gốc
                        img_format = img.format
                        
                        # Nén và lưu ảnh
                        img.save(output_path, format=img_format, optimize=True, quality=quality)
                        
                        # Lấy kích thước sau khi nén
                        after_size = os.path.getsize(output_path)
                        total_after += after_size
                        
                        # Tính phần trăm giảm
                        reduction = (1 - after_size / before_size) * 100
                        
                        print(f"Đã nén: {input_path}")
                        print(f"  Trước: {before_size/1024:.2f} KB, Sau: {after_size/1024:.2f} KB, Giảm: {reduction:.2f}%")
                        
                        count += 1
                except Exception as e:
                    print(f"Lỗi khi nén {input_path}: {e}")
                    # Sao chép ảnh gốc nếu không thể nén
                    shutil.copy2(input_path, output_path)
    
    # Tính toán kết quả
    total_reduction = (1 - total_after / total_before) * 100 if total_before > 0 else 0
    print(f"\nĐã xử lý {count} ảnh")
    print(f"Tổng kích thước trước: {total_before/1024/1024:.2f} MB")
    print(f"Tổng kích thước sau: {total_after/1024/1024:.2f} MB")
    print(f"Tổng giảm: {total_reduction:.2f}%")

def compress_js_css(source_dir, output_dir):
    """
    Sao chép và nén các file JavaScript và CSS
    """
    for root, _, files in os.walk(source_dir):
        for file in files:
            if file.lower().endswith(('.js', '.css')):
                input_path = os.path.join(root, file)
                # Tạo đường dẫn tương đối
                rel_path = os.path.relpath(os.path.join(root, file), source_dir)
                output_path = os.path.join(output_dir, rel_path)
                
                # Đảm bảo thư mục đích tồn tại
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                # Đọc file
                with open(input_path, 'r', encoding='utf-8', errors='ignore') as f:
                    content = f.read()
                
                # Nén JS/CSS bằng cách loại bỏ comments và khoảng trắng thừa
                if file.lower().endswith('.js'):
                    # Loại bỏ comments dạng // ...
                    lines = content.split('\n')
                    cleaned_lines = []
                    for line in lines:
                        comment_pos = line.find('//')
                        if comment_pos >= 0:
                            line = line[:comment_pos]
                        if line.strip():
                            cleaned_lines.append(line)
                    content = '\n'.join(cleaned_lines)
                
                # Ghi file đã tối ưu
                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                print(f"Đã xử lý: {input_path}")

def copy_other_files(source_dir, output_dir):
    """
    Sao chép các file khác không phải ảnh, JS, CSS
    """
    for root, _, files in os.walk(source_dir):
        for file in files:
            if not file.lower().endswith(('.png', '.jpg', '.jpeg', '.webp', '.bmp', '.js', '.css')):
                input_path = os.path.join(root, file)
                # Tạo đường dẫn tương đối
                rel_path = os.path.relpath(os.path.join(root, file), source_dir)
                output_path = os.path.join(output_dir, rel_path)
                
                # Đảm bảo thư mục đích tồn tại
                os.makedirs(os.path.dirname(output_path), exist_ok=True)
                
                # Sao chép file
                shutil.copy2(input_path, output_path)
                
                print(f"Đã sao chép: {input_path}")

if __name__ == "__main__":
    # Thư mục nguồn (cả trang web)
    source_root = "."
    
    # Thư mục đích để lưu các tập tin đã nén
    output_root = "./optimized_site"
    
    # Tạo thư mục đích nếu chưa tồn tại
    if not os.path.exists(output_root):
        os.makedirs(output_root)
    
    # Nén hình ảnh
    print("Bắt đầu nén hình ảnh...")
    compress_images(os.path.join(source_root, "images"), os.path.join(output_root, "images"), quality=75)
    if os.path.exists(os.path.join(source_root, "image")):
        compress_images(os.path.join(source_root, "image"), os.path.join(output_root, "image"), quality=75)
    
    # Tối ưu JS và CSS
    print("\nBắt đầu tối ưu JS và CSS...")
    compress_js_css(source_root, output_root)
    
    # Sao chép các file khác
    print("\nBắt đầu sao chép các file khác...")
    copy_other_files(source_root, output_root)
    
    print("\nHoàn tất! Các file đã được tối ưu và lưu vào thư mục:", output_root) 
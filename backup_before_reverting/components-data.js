const cpuData = {
    "1220v3": { 
        name: "Intel Xeon E3-1220 v3",
        price: 300000,
        image: "https:
        brand: "Intel",
        warranty: "12 tháng",
        socket: "LGA1150",
        cores: 4,
        threads: 4,
        technology: "22nm",
        ram_support: "DDR3",
        ram_bus: "1600MHz",
        condition: "2ND",
        score: 2
    },
    "9100f": {
        name: "Intel Core i3-9100F",
        price: 1600000,
        image: "https:
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1151",
        cores: 4,
        threads: 4,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2666MHz",
        condition: "New",
        score: 3
    },
    "10400f": {
        name: "Intel Core i5-10400F",
        price: 2500000,
        image: "https:
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1200",
        cores: 6,
        threads: 12,
        technology: "14nm",
        ram_support: "DDR4",
        ram_bus: "2666MHz",
        condition: "New",
        score: 5
    },
    "12400f": {
        name: "Intel Core i5-12400F",
        price: 3700000,
        image: "https:
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 6,
        threads: 12,
        technology: "10nm",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "New",
        score: 7
    },
    "13400f": {
        name: "Intel Core i5-13400F",
        price: 4800000,
        image: "https:
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 10,
        threads: 16,
        technology: "10nm",
        ram_support: "DDR4/DDR5",
        ram_bus: "3200MHz",
        condition: "New",
        score: 8
    },
    "13600k": {
        name: "Intel Core i5-13600K",
        price: 7000000,
        image: "https:
        brand: "Intel",
        warranty: "36 tháng",
        socket: "LGA1700",
        cores: 14,
        threads: 20,
        technology: "10nm",
        ram_support: "DDR4/DDR5",
        ram_bus: "5600MHz",
        condition: "New",
        score: 9
    },
    "5600g": {
        name: "AMD Ryzen 5 5600G",
        price: 3000000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 6,
        threads: 12,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "New",
        score: 6
    },
    "5800x3d": {
        name: "AMD Ryzen 7 5800X3D",
        price: 6500000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM4",
        cores: 8,
        threads: 16,
        technology: "7nm",
        ram_support: "DDR4",
        ram_bus: "3200MHz",
        condition: "New",
        score: 8
    },
    "7600x": {
        name: "AMD Ryzen 5 7600X",
        price: 7000000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        socket: "AM5",
        cores: 6,
        threads: 12,
        technology: "5nm",
        ram_support: "DDR5",
        ram_bus: "5200MHz",
        condition: "New",
        score: 8
    }
};
const mainboardData = {
    "H61": {
        name: "Gigabyte H61M-DS2 (LGA1155 - Cũ)",
        price: 400000,
        image: "https:
        brand: "Gigabyte (Cũ)",
        warranty: "1 tháng",
        sockets: ["LGA1155"],
        memoryType: "DDR3",
        condition: "2ND",
        nvmeSlots: 0,
        pcieVersion: "2.0",
        formFactor: "Micro-ATX",
        score: 1
    },
    "H81": {
        name: "ASUS H81M-K",
        price: 1000000,
        image: "https:
        brand: "ASUS",
        warranty: "36 tháng",
        sockets: ["LGA1150"],
        memoryType: "DDR3",
        condition: "New",
        nvmeSlots: 0,
        pcieVersion: "3.0",
        formFactor: "Micro-ATX",
        score: 3
    },
    "H510": {
        name: "MSI H510M PRO (LGA1200)",
        price: 1800000,
        image: "https:
        brand: "MSI",
        warranty: "36 tháng",
        sockets: ["LGA1200"],
        memoryType: "DDR4",
        condition: "New",
        nvmeSlots: 1,
        pcieVersion: "4.0",
        formFactor: "Micro-ATX",
        score: 5
    },
    "HNZ-B760": {
        name: "MSI PRO B760M-A WIFI DDR4",
        price: 3800000,
        image: "https:
        brand: "MSI",
        warranty: "36 tháng",
        sockets: ["LGA1700"],
        memoryType: "DDR4",
        condition: "New",
        nvmeSlots: 2,
        pcieVersion: "5.0",
        formFactor: "Micro-ATX",
        score: 7
    },
    "MSI-Z690": {
        name: "MSI MAG Z690 TOMAHAWK WIFI DDR4",
        price: 5500000,
        image: "https:
        brand: "MSI",
        warranty: "36 tháng",
        sockets: ["LGA1700"],
        memoryType: "DDR4",
        condition: "New",
        nvmeSlots: 4,
        pcieVersion: "5.0",
        formFactor: "ATX",
        score: 9
    },
    "B450": {
        name: "MSI B450 TOMAHAWK MAX (AM4)",
        price: 2000000,
        image: "https:
        brand: "MSI",
        warranty: "36 tháng",
        sockets: ["AM4"],
        memoryType: "DDR4",
        condition: "New",
        nvmeSlots: 1,
        pcieVersion: "3.0",
        formFactor: "ATX",
        score: 6
    },
    "X570": {
        name: "ASUS TUF GAMING X570-PLUS (AM4)",
        price: 4500000,
        image: "https:
        brand: "ASUS",
        warranty: "36 tháng",
        sockets: ["AM4"],
        memoryType: "DDR4",
        condition: "New",
        nvmeSlots: 2,
        pcieVersion: "4.0",
        formFactor: "ATX",
        score: 8
    },
    "X670": {
        name: "GIGABYTE X670 AORUS ELITE AX (AM5)",
        price: 7500000,
        image: "https:
        brand: "GIGABYTE",
        warranty: "36 tháng",
        sockets: ["AM5"],
        memoryType: "DDR5",
        condition: "New",
        nvmeSlots: 3,
        pcieVersion: "5.0",
        formFactor: "ATX",
        score: 9
    }
};
const vgaData = {
    "1050ti": {
        name: "NVIDIA GeForce GTX 1050 Ti",
        price: 2300000,
        image: "https:
        name: "NVIDIA GeForce GTX 1050Ti 4GB",
        price: 1500000,
        image: "https:
        brand: "NVIDIA",
        warranty: "1 tháng",
        memory: "4GB GDDR5",
        memory_type: "GDDR5",
        bus: "128-bit",
        interface: "PCIe x16",
        condition: "2ND",
        score: 2
    },
    "1660s": {
        name: "NVIDIA GeForce GTX 1660 Super 6GB",
        price: 3500000,
        image: "https:
        brand: "NVIDIA",
        warranty: "12 tháng",
        memory: "6GB GDDR6",
        memory_type: "GDDR6",
        bus: "192-bit",
        interface: "PCIe x16",
        condition: "2ND",
        score: 4
    },
    "3060": {
        name: "NVIDIA GeForce RTX 3060 12GB",
        price: 6500000,
        image: "https:
        brand: "NVIDIA",
        warranty: "36 tháng",
        memory: "12GB GDDR6",
        memory_type: "GDDR6",
        bus: "192-bit",
        interface: "PCIe 4.0 x16",
        condition: "New",
        score: 6
    },
    "3070ti": {
        name: "NVIDIA GeForce RTX 3070Ti 8GB",
        price: 11000000,
        image: "https:
        brand: "NVIDIA",
        warranty: "36 tháng",
        memory: "8GB GDDR6X",
        memory_type: "GDDR6X",
        bus: "256-bit",
        interface: "PCIe 4.0 x16",
        condition: "New",
        score: 8
    },
    "4070": {
        name: "NVIDIA GeForce RTX 4070 12GB",
        price: 15000000,
        image: "https:
        brand: "NVIDIA",
        warranty: "36 tháng",
        memory: "12GB GDDR6X",
        memory_type: "GDDR6X",
        bus: "192-bit",
        interface: "PCIe 4.0 x16",
        condition: "New",
        score: 9
    },
    "rx6600": {
        name: "AMD Radeon RX 6600 8GB",
        price: 5000000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        memory: "8GB GDDR6",
        memory_type: "GDDR6",
        bus: "128-bit",
        interface: "PCIe 4.0 x8",
        condition: "New",
        score: 5
    },
    "rx6700xt": {
        name: "AMD Radeon RX 6700 XT 12GB",
        price: 8000000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        memory: "12GB GDDR6",
        memory_type: "GDDR6",
        bus: "192-bit",
        interface: "PCIe 4.0 x16",
        condition: "New",
        score: 7
    },
    "rx7800xt": {
        name: "AMD Radeon RX 7800 XT 16GB",
        price: 14000000,
        image: "https:
        brand: "AMD",
        warranty: "36 tháng",
        memory: "16GB GDDR6",
        memory_type: "GDDR6",
        bus: "256-bit",
        interface: "PCIe 4.0 x16",
        condition: "New",
        score: 9
    }
};
const ramData = {
    "adata-8": {
        name: "ADATA 8GB DDR4 3200MHz (1x8GB)",
        price: 500000,
        image: "https:
        brand: "ADATA",
        warranty: "Lifetime",
        capacity: "8GB (1x8GB)",
        type: "DDR4",
        speed: "3200MHz",
        condition: "New",
        score: 3
    },
    "gskill-16": {
        name: "G.Skill Ripjaws V 16GB DDR4 3200MHz (2x8GB)",
        price: 1200000,
        image: "https:
        brand: "G.Skill",
        warranty: "Lifetime",
        capacity: "16GB (2x8GB)",
        type: "DDR4",
        speed: "3200MHz",
        condition: "New",
        score: 6
    },
    "corsair-16": {
        name: "Corsair Vengeance LPX 16GB DDR4 3600MHz (2x8GB)",
        price: 1500000,
        image: "https:
        brand: "Corsair",
        warranty: "Lifetime",
        capacity: "16GB (2x8GB)",
        type: "DDR4",
        speed: "3600MHz",
        condition: "New",
        score: 7
    },
    "sstc-16": {
        name: "Samsung 16GB DDR4 3200MHz (2x8GB)",
        price: 1300000,
        image: "https:
        brand: "Samsung",
        warranty: "Lifetime",
        capacity: "16GB (2x8GB)",
        type: "DDR4",
        speed: "3200MHz",
        condition: "New",
        score: 6
    },
    "corsair-32": {
        name: "Corsair Vengeance RGB Pro 32GB DDR4 3600MHz (2x16GB)",
        price: 2800000,
        image: "https:
        brand: "Corsair",
        warranty: "Lifetime",
        capacity: "32GB (2x16GB)",
        type: "DDR4",
        speed: "3600MHz",
        condition: "New",
        score: 8
    },
    "gskill-ddr5-32": {
        name: "G.Skill Trident Z5 RGB 32GB DDR5 6000MHz (2x16GB)",
        price: 4500000,
        image: "https:
        brand: "G.Skill",
        warranty: "Lifetime",
        capacity: "32GB (2x16GB)",
        type: "DDR5",
        speed: "6000MHz",
        condition: "New",
        score: 9
    }
};
const ssdData = {
    "crucial-256": {
        name: "Crucial MX500 256GB SATA SSD",
        price: 700000,
        image: "https:
        brand: "Crucial",
        warranty: "36 tháng",
        capacity: "256GB",
        interface: "SATA III",
        read_speed: "560MB/s",
        write_speed: "510MB/s",
        condition: "New",
        score: 3
    },
    "crucial-500": {
        name: "Crucial P3 500GB NVMe SSD",
        price: 1000000,
        image: "https:
        brand: "Crucial",
        warranty: "36 tháng",
        capacity: "500GB",
        interface: "NVMe PCIe 3.0 x4",
        read_speed: "3500MB/s",
        write_speed: "3000MB/s",
        condition: "New",
        score: 5
    },
    "samsung-1TB": {
        name: "Samsung 970 EVO Plus 1TB NVMe SSD",
        price: 2200000,
        image: "https:
        brand: "Samsung",
        warranty: "60 tháng",
        capacity: "1TB",
        interface: "NVMe PCIe 3.0 x4",
        read_speed: "3500MB/s",
        write_speed: "3300MB/s",
        condition: "New",
        score: 7
    },
    "samsung-2TB": {
        name: "Samsung 980 PRO 2TB NVMe SSD",
        price: 4500000,
        image: "https:
        brand: "Samsung",
        warranty: "60 tháng",
        capacity: "2TB",
        interface: "NVMe PCIe 4.0 x4",
        read_speed: "7000MB/s",
        write_speed: "5100MB/s",
        condition: "New",
        score: 9
    },
    "wd-black-1TB": {
        name: "Western Digital Black SN850X 1TB NVMe SSD",
        price: 2700000,
        image: "https:
        brand: "Western Digital",
        warranty: "60 tháng",
        capacity: "1TB",
        interface: "NVMe PCIe 4.0 x4",
        read_speed: "7300MB/s",
        write_speed: "6300MB/s",
        condition: "New",
        score: 8
    }
};
const caseData = {
    "MSI-MAG": {
        name: "MSI MAG FORGE 100M ATX Mid Tower",
        price: 1000000,
        image: "https:
        brand: "MSI",
        warranty: "12 tháng",
        size: "Mid Tower",
        material: "Steel / Plastic",
        formFactor: "ATX, Micro-ATX, Mini-ITX",
        fans_included: "2x 120mm ARGB Fans",
        rgb: "Yes",
        condition: "New",
        score: 5
    },
    "NZXT-H510": {
        name: "NZXT H510 ATX Mid Tower",
        price: 1800000,
        image: "https:
        brand: "NZXT",
        warranty: "24 tháng",
        size: "Mid Tower",
        material: "Steel / Tempered Glass",
        formFactor: "ATX, Micro-ATX, Mini-ITX",
        fans_included: "2x 120mm Aer F Fans",
        rgb: "No",
        condition: "New",
        score: 7
    },
    "GA3": {
        name: "Deepcool MATREXX 55 MESH ATX Mid Tower",
        price: 1400000,
        image: "https:
        brand: "Deepcool",
        warranty: "12 tháng",
        size: "Mid Tower",
        material: "Steel / Tempered Glass",
        formFactor: "ATX, Micro-ATX, Mini-ITX",
        fans_included: "4x 120mm ARGB Fans",
        rgb: "Yes",
        condition: "New",
        score: 6
    },
    "Corsair-5000D": {
        name: "Corsair 5000D AIRFLOW ATX Mid Tower",
        price: 3500000,
        image: "https:
        brand: "Corsair",
        warranty: "24 tháng",
        size: "Mid Tower",
        material: "Steel / Tempered Glass",
        formFactor: "ATX, Micro-ATX, Mini-ITX",
        fans_included: "3x 120mm AirGuide Fans",
        rgb: "No",
        condition: "New",
        score: 8
    },
    "Lian-Li-O11": {
        name: "Lian Li O11 Dynamic EVO ATX Mid Tower",
        price: 4500000,
        image: "https:
        brand: "Lian Li",
        warranty: "24 tháng",
        size: "Mid Tower",
        material: "Aluminum / Tempered Glass",
        formFactor: "ATX, Micro-ATX, Mini-ITX",
        fans_included: "None",
        rgb: "No",
        condition: "New",
        score: 9
    }
};
const cpuCoolerData = {
    "deepcool": {
        name: "Deepcool GAMMAXX 400 V2",
        price: 400000,
        image: "https:
        brand: "Deepcool",
        warranty: "12 tháng",
        type: "Air Cooler",
        tdp: "180W",
        fan_speed: "500-1650 RPM",
        rgb: "Yes",
        condition: "New",
        score: 4
    },
    "ID-SE-224": {
        name: "ID-COOLING SE-224-XT",
        price: 650000,
        image: "https:
        brand: "ID-COOLING",
        warranty: "24 tháng",
        type: "Air Cooler",
        tdp: "180W",
        fan_speed: "700-1800 RPM",
        rgb: "Yes",
        condition: "New",
        score: 5
    },
    "CR1000": {
        name: "Cooler Master Hyper 212 RGB Black Edition",
        price: 850000,
        image: "https:
        brand: "Cooler Master",
        warranty: "24 tháng",
        type: "Air Cooler",
        tdp: "180W",
        fan_speed: "650-2000 RPM",
        rgb: "Yes",
        condition: "New",
        score: 6
    },
    "NZXT-X63": {
        name: "NZXT Kraken X63 RGB 280mm AIO Liquid Cooler",
        price: 3800000,
        image: "https:
        brand: "NZXT",
        warranty: "72 tháng",
        type: "Liquid Cooler",
        tdp: "250W+",
        fan_speed: "500-1800 RPM",
        rgb: "Yes",
        radiator_size: "280mm",
        condition: "New",
        score: 9
    },
    "Arctic-Freezer": {
        name: "Arctic Liquid Freezer II 240mm AIO Liquid Cooler",
        price: 2800000,
        image: "https:
        brand: "Arctic",
        warranty: "72 tháng",
        type: "Liquid Cooler",
        tdp: "250W+",
        fan_speed: "200-1800 RPM",
        rgb: "No",
        radiator_size: "240mm",
        condition: "New",
        score: 8
    }
};
const psuData = {
    "coolermaster-450": {
        name: "Cooler Master MWE 450W 80+ Bronze",
        price: 850000,
        image: "https:
        brand: "Cooler Master",
        warranty: "36 tháng",
        power: "450W",
        certification: "80+ Bronze",
        modular: "No",
        condition: "New",
        score: 4
    },
    "corsair-550": {
        name: "Corsair CV550 550W 80+ Bronze",
        price: 1200000,
        image: "https:
        brand: "Corsair",
        warranty: "36 tháng",
        power: "550W",
        certification: "80+ Bronze",
        modular: "No",
        condition: "New",
        score: 5
    },
    "VSP750": {
        name: "Corsair RM750 750W 80+ Gold",
        price: 2500000,
        image: "https:
        brand: "Corsair",
        warranty: "60 tháng",
        power: "750W",
        certification: "80+ Gold",
        modular: "Full",
        condition: "New",
        score: 7
    },
    "corsair-850": {
        name: "Corsair RM850x 850W 80+ Gold",
        price: 3200000,
        image: "https:
        brand: "Corsair",
        warranty: "60 tháng",
        power: "850W",
        certification: "80+ Gold",
        modular: "Full",
        condition: "New",
        score: 8
    },
    "seasonic-1000": {
        name: "Seasonic PRIME TX-1000 1000W 80+ Titanium",
        price: 6500000,
        image: "https:
        brand: "Seasonic",
        warranty: "120 tháng",
        power: "1000W",
        certification: "80+ Titanium",
        modular: "Full",
        condition: "New",
        score: 10
    }
};
const hddData = {
    "wd-blue-1tb": {
        name: "Western Digital Blue 1TB 7200RPM HDD",
        price: 800000,
        image: "https:
        brand: "Western Digital",
        warranty: "24 tháng",
        capacity: "1TB",
        rpm: "7200 RPM",
        interface: "SATA III 6Gb/s",
        cache: "64MB",
        condition: "New",
        score: 5
    },
    "seagate-2tb": {
        name: "Seagate Barracuda 2TB 7200RPM HDD",
        price: 1300000,
        image: "https:
        brand: "Seagate",
        warranty: "24 tháng",
        capacity: "2TB",
        rpm: "7200 RPM",
        interface: "SATA III 6Gb/s",
        cache: "256MB",
        condition: "New",
        score: 6
    },
    "toshiba-4tb": {
        name: "Toshiba X300 4TB 7200RPM HDD",
        price: 2500000,
        image: "https:
        brand: "Toshiba",
        warranty: "24 tháng",
        capacity: "4TB",
        rpm: "7200 RPM",
        interface: "SATA III 6Gb/s",
        cache: "128MB",
        condition: "New",
        score: 7
    }
};
const monitorData = {
    "asus-vp228": {
        name: "ASUS VP228HE 21.5\" FHD Monitor",
        price: 2200000,
        image: "https:
        brand: "ASUS",
        warranty: "36 tháng",
        panel: "TN",
        resolution: "1920x1080 (FHD)",
        refresh_rate: "75Hz",
        response_time: "1ms",
        condition: "New",
        score: 5
    },
    "aoc-24g2": {
        name: "AOC 24G2 24\" FHD Gaming Monitor",
        price: 3500000,
        image: "https:
        brand: "AOC",
        warranty: "36 tháng",
        panel: "IPS",
        resolution: "1920x1080 (FHD)",
        refresh_rate: "144Hz",
        response_time: "1ms",
        condition: "New",
        score: 7
    },
    "lg-27gp850": {
        name: "LG 27GP850 27\" QHD Gaming Monitor",
        price: 8000000,
        image: "https:
        brand: "LG",
        warranty: "36 tháng",
        panel: "Nano IPS",
        resolution: "2560x1440 (QHD)",
        refresh_rate: "165Hz",
        response_time: "1ms",
        condition: "New",
        score: 9
    },
    "samsung-odyssey": {
        name: "Samsung Odyssey G7 27\" Curved Gaming Monitor",
        price: 12000000,
        image: "https:
        brand: "Samsung",
        warranty: "36 tháng",
        panel: "VA",
        resolution: "2560x1440 (QHD)",
        refresh_rate: "240Hz",
        response_time: "1ms",
        condition: "New",
        score: 10
    }
};
export { cpuData, mainboardData, vgaData, ramData, ssdData, psuData, caseData, cpuCoolerData, hddData, monitorData };
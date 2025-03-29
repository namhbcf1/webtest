// Cấu hình cho AMD - Valorant theo ngân sách
if (!window.amdConfigs) {
    window.amdConfigs = {};
}

if (!window.amdConfigs.valorant) {
    window.amdConfigs.valorant = {
        '3M': {
            cpu: "fx4100",
            mainboard: "A320M",
            vga: "750ti",
            ram: "D38G",
            ssd: "sata-sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "350W"
        },
        '4M': {
            cpu: "fx6300",
            mainboard: "A320M",
            vga: "750ti",
            ram: "D38G",
            ssd: "sata-sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "350W"
        },
        '5M': {
            cpu: "3100",
            mainboard: "A320M",
            vga: "960",
            ram: "D38G",
            ssd: "sata-sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '6M': {
            cpu: "4100",
            mainboard: "A320M",
            vga: "960",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '7M': {
            cpu: "4100",
            mainboard: "B450M",
            vga: "1060-3g",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '8M': {
            cpu: "5600",
            mainboard: "B450M",
            vga: "960",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '9M': {
            cpu: "5600",
            mainboard: "B450M",
            vga: "1060-3g",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '10M': {
            cpu: "5600",
            mainboard: "B450M",
            vga: "1660s",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "STOCK",
            psu: "DT660"
        },
        '11M': {
            cpu: "5600",
            mainboard: "B450M",
            vga: "2060s",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "CR1000",
            psu: "DT660"
        },
        '12M': {
            cpu: "5600",
            mainboard: "MSI-B550",
            vga: "2070s",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA3",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '13M': {
            cpu: "5600",
            mainboard: "MSI-B550",
            vga: "3060ti",
            ram: "cosair-16",
            ssd: "crucial-500",
            case: "GA3",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '14M': {
            cpu: "5600",
            mainboard: "MSI-B550",
            vga: "3070",
            ram: "cosair-16",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '15M': {
            cpu: "5600",
            mainboard: "MSI-B550",
            vga: "3070ti",
            ram: "cosair-16",
            ssd: "sstc-256",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '16M': {
            cpu: "5700X",
            mainboard: "MSI-B550",
            vga: "3070ti",
            ram: "cosair-16",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '17M': {
            cpu: "5700X",
            mainboard: "MSI-B550",
            vga: "3070ti",
            ram: "cosair-32",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '18M': {
            cpu: "5700X3D",
            mainboard: "MSI-B550",
            vga: "3070",
            ram: "cosair-32",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "VSP750"
        },
        '19M': {
            cpu: "5700X3D",
            mainboard: "MSI-B550",
            vga: "4060",
            ram: "cosair-16",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "COSAIR850"
        },
        '20M': {
            cpu: "5700X3D",
            mainboard: "MSI-B550",
            vga: "3070ti",
            ram: "cosair-32",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "COSAIR850"
        },
        '25M': {
            cpu: "5700X3D",
            mainboard: "MSI-B550",
            vga: "4060ti-16G",
            ram: "cosair-32",
            ssd: "crucial-1tb",
            case: "GA",
            cpuCooler: "CR1000",
            psu: "COSAIR850"
        },
        '30M': {
            cpu: "7900x",
            mainboard: "B650M",
            vga: "4070",
            ram: "cosair-32",
            ssd: "crucial-500",
            case: "GA",
            cpuCooler: "TMR120SE",
            psu: "VSP750"
        }
    };
}

// Backwards compatibility
export const configs = window.amdConfigs.valorant; 
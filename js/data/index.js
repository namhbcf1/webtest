// Index file for data modules
// Import all component data

import { data as cpuData } from './cpu.js';
import { data as mainboardData } from './mainboard.js';
import { data as vgaData } from './vga.js';
import { data as ramData } from './ram.js';
import { data as ssdData } from './ssd.js';
import { data as hddData } from './hdd.js';
import { data as psuData } from './psu.js';
import { data as caseData } from './case.js';
import { data as cpuCoolerData } from './cpuCooler.js';
import { data as monitorData } from './monitor.js';

// Export all data in a structured format
export const data = {
    cpu: cpuData,
    mainboard: mainboardData,
    vga: vgaData,
    ram: ramData,
    ssd: ssdData,
    hdd: hddData,
    psu: psuData,
    case: caseData,
    cpuCooler: cpuCoolerData,
    monitor: monitorData
}; 
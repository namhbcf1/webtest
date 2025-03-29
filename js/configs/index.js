// Index file for configuration modules
// This file imports all game configurations from both AMD and Intel folders

// Import game configs for Intel
import '../configs/intel/valorant.js';
import '../configs/intel/csgo.js';
import '../configs/intel/pubg.js';
import '../configs/intel/lol.js';
import '../configs/intel/gta-v.js';
import '../configs/intel/elden-ring.js';
import '../configs/intel/naraka.js';
import '../configs/intel/genshin.js';
import '../configs/intel/fo4.js';
import '../configs/intel/black-myth-wukong.js';
import '../configs/intel/audition.js';
import '../configs/intel/battle-teams-2.js';
import '../configs/intel/delta-force.js';
import '../configs/intel/mu-origin.js';
import '../configs/intel/crossfire.js';

// Import game configs for AMD
import '../configs/amd/valorant.js';
import '../configs/amd/csgo.js';
import '../configs/amd/pubg.js';
import '../configs/amd/lol.js';
import '../configs/amd/gta-v.js';
import '../configs/amd/elden-ring.js';
import '../configs/amd/naraka.js';
import '../configs/amd/genshin.js';
import '../configs/amd/fo4.js';
import '../configs/amd/black-myth-wukong.js';
import '../configs/amd/audition.js';
import '../configs/amd/battle-teams-2.js';
import '../configs/amd/delta-force.js';
import '../configs/amd/mu-origin.js';
import '../configs/amd/crossfire.js';

// Initialize configs object if not exists
if (!window.configs) {
  window.configs = {};
}

// Helper function to get configs by CPU type and game
export function getConfig(cpuType, gameId, budget) {
  if (!cpuType || !gameId || !budget) {
    console.error('Missing parameters for getConfig', { cpuType, gameId, budget });
    return null;
  }
  
  // Convert budget to the format used in config files (e.g., 15000000 -> '15M')
  const budgetKey = `${Math.floor(budget/1000000)}M`;
  
  // Select correct config object based on CPU type
  const configObj = cpuType.toLowerCase() === 'intel' ? window.intelConfigs : window.amdConfigs;
  
  // Check if config exists
  if (!configObj || !configObj[gameId] || !configObj[gameId][budgetKey]) {
    console.warn(`No configuration found for ${cpuType} ${gameId} at budget ${budgetKey}`);
    return null;
  }
  
  return configObj[gameId][budgetKey];
}

// Organize configs into CPU types -> games -> budgets structure
export const configs = {
  intel: window.intelConfigs || {},
  amd: window.amdConfigs || {}
};
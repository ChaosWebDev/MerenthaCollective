import { raceStats, classStats } from 'data/Races';

export const BASE_FACTOR = 0.525;
export const TIERS = {
  1: 0.0,
  2: 0.3,
  3: 0.55,
  4: 0.7,
  5: 2.0,
};
export const RACE_DEFAULT = 4;
export const CLASS_DEFAULT = 5;

// ------------------------------------------------------------

export function getAdvanceExp(level) {
  let result = level * level * level * 80;
  if (level < 20) result = (result * level) / 20;
  return result + 5350;
}

export function getMaxExp(level) {
  return getAdvanceExp(level) + getAdvanceExp(level + 1) + getAdvanceExp(level + 2);
}

// ------------------------------------------------------------

export function getRaceRank(race, stat) {
  if (!raceStats[race] || !raceStats[race][stat]) return RACE_DEFAULT;
  return raceStats[race][stat];
}

export function getClassRank(cl, stat) {
  if (!classStats[cl] || !classStats[cl][stat]) return CLASS_DEFAULT;
  return classStats[cl][stat];
}

// ------------------------------------------------------------

export function getClassModifier(charClass, stat) {
  switch (getClassRank(charClass, stat)) {
    case 1:
      return TIERS[1];
    case 2:
      return TIERS[2];
    case 3:
      return TIERS[3];
    case 4:
      return TIERS[4];
    default:
      return TIERS[5];
  }
}

export function getRaceModifier(race, stat) {
  switch (getRaceRank(race, stat)) {
    case 1:
      return TIERS[1];
    case 2:
      return TIERS[2];
    case 3:
      return TIERS[3];
    case 4:
      return TIERS[4];
    default:
      return TIERS[5];
  }
}

export function getBaseCost(level) {
  let result = 0;
  for (let i = level; i > 0; i -= 15) {
    switch (i) {
      case 0:
      case 1:
      case 2:
      case 3:
      case 4:
        result += 1;
        break;
      case 5:
      case 6:
        result += 2;
        break;
      case 7:
      case 8:
        result += 5;
        break;
      case 9:
        result += 9;
        break;
      case 10:
        result += 14;
        break;
      default:
        result += (i * i * (100 + i * 5) + (i * 1000) / 3) / 1000;
        break;
    }
  }

  if (result < 9) {
    return result;
  } else {
    return Math.trunc(result * BASE_FACTOR);
  }
}

export function getStatCost(stat, charClass, race, statLevel = 1, count = 1, isWerewolf = false, werewolfTimeOfDay = 'day') {
  statLevel = parseInt(statLevel);
  count = parseInt(count);
  if (!count || count <= 0) {
    return 0;
  } else if (count > 500) {
    count = 500;
  }

  let cost = 0;
  const classModifier = getClassModifier(charClass, stat);
  let effectiveRaceModifier = getRaceModifier(race, stat);

  // Apply werewolf mechanics - determine which race stats to use
  if (isWerewolf && werewolfTimeOfDay === 'night') {
    // During night: use werewolf stats instead of base race
    effectiveRaceModifier = getRaceModifier('Were-wolf', stat);
  }

  cost = Math.trunc(getBaseCost(statLevel) * (1.0 + classModifier + effectiveRaceModifier)) * 1000;

  // Apply 15% penalty to mental stats for werewolves ONLY during day
  if (isWerewolf && werewolfTimeOfDay === 'day') {
    if (stat === 'Wisdom' || stat === 'Intelligence' || stat === 'Charisma') {
      cost = Math.trunc(cost * 1.15);
    }
  }

  return cost + getStatCost(stat, charClass, race, statLevel + 1, count - 1, isWerewolf, werewolfTimeOfDay);
}

export function getMaxStat(stat, charClass, race, level, isWerewolf = false, werewolfTimeOfDay = 'day') {
  const maxEXP = getMaxExp(level);
  let statLvl = 0;

  while (statLvl < 500 && getStatCost(stat, charClass, race, statLvl, 1, isWerewolf, werewolfTimeOfDay) <= maxEXP) {
    statLvl++;
  }
  return statLvl;
}

export function getOptimalWerewolfMode(stat, charClass, race, level) {
  // Calculate max stat for both day and night modes
  const dayMax = getMaxStat(stat, charClass, race, level, true, 'day');
  const nightMax = getMaxStat(stat, charClass, race, level, true, 'night');

  // Return 'night' if night mode gives higher max, otherwise 'day'
  return nightMax > dayMax ? 'night' : 'day';
}

export function createDefaultStatWerewolfToggles(charClass, race, level) {
  const STATS = ['Strength', 'Charisma', 'Constitution', 'Dexterity', 'Intelligence', 'Wisdom'];
  const toggles = {};

  STATS.forEach((stat) => {
    toggles[stat] = getOptimalWerewolfMode(stat, charClass, race, level);
  });

  return toggles;
}

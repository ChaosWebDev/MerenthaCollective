export const skillNames = {
  Combat: ['attack', 'defense', 'charging', 'melee', 'double wielding', 'two handed', 'riding'],
  Weapons: ['axe', 'blade', 'blunt', 'knife', 'flail', 'projectile', 'ranged'],
  'Magic/Nature': ['conjuring', 'faith', 'healing', 'magic attack', 'magic defense', 'nature', 'telepathy'],
  Deception: ['acrobatics', 'bargaining', 'entertaining', 'locks', 'murder', 'stealing', 'stealth'],
};

/*
|--------------------------------------------------------------------------
| Base skill multipliers
|--------------------------------------------------------------------------
*/

const BASE_SKILL_MULTIPLIERS = {
  // Combat
  attack: 20,
  defense: 20,
  charging: 0,
  melee: 20,
  'double wielding': 0,
  'two handed': 0,
  riding: 0,

  // Weapons
  axe: 0,
  blade: 20,
  blunt: 20,
  knife: 20,
  flail: 0,
  projectile: 0,
  ranged: 0,

  // Magic / Nature
  conjuring: 0,
  faith: 0,
  healing: 0,
  'magic attack': 0,
  'magic defense': 0,
  nature: 0,
  telepathy: 0,

  // Deception
  acrobatics: 0,
  bargaining: 20,
  entertaining: 0,
  locks: 0,
  murder: 0,
  stealing: 0,
  stealth: 0,
};

/*
|--------------------------------------------------------------------------
| Class skill multipliers
|--------------------------------------------------------------------------
*/

export const classSkillMultipliers = {
  Cleric: {
    attack: 25,
    defense: 20,
    melee: 50,
    'two handed': 10,
    'double wielding': 20,

    blade: 20,
    blunt: 80,
    knife: 80,
    projectile: 20,
    axe: 60,
    flail: 100,

    conjuring: 30,
    faith: 90,
    'magic attack': 10,
    'magic defense': 80,
    healing: 100,
  },

  Fighter: {
    attack: 100,
    defense: 90,
    melee: 100,
    'two handed': 100,
    'double wielding': 100,

    blade: 90,
    blunt: 75,
    knife: 70,
    projectile: 60,
    axe: 90,
    flail: 90,

    stealing: 10,
    locks: 5,
    stealth: 10,
  },

  Mage: {
    attack: 30,
    defense: 60,
    melee: 50,
    'two handed': 15,
    'double wielding': 15,

    blade: 20,
    blunt: 90,
    knife: 50,
    projectile: 53,
    axe: 60,
    flail: 100,

    conjuring: 100,
    'magic attack': 100,
    'magic defense': 61,
    telepathy: 20,
    healing: 20,

    locks: 15,
  },

  Monk: {
    attack: 70,
    defense: 100,
    melee: 100,

    blade: 5,
    blunt: 95,
    knife: 30,
    projectile: 100,
    axe: 60,
    flail: 100,

    conjuring: 15,
    faith: 100,
    'magic attack': 25,
    'magic defense': 100,
    healing: 37,
  },

  Rogue: {
    attack: 100,
    defense: 100,
    melee: 100,
    'two handed': 10,
    'double wielding': 80,

    blade: 40,
    blunt: 100,
    knife: 100,
    projectile: 100,
    axe: 70,
    flail: 60,

    murder: 100,
    stealing: 100,
    locks: 100,
    stealth: 100,
  },

  Dragon: {
    bargaining: 63,
  },
};

/*
|--------------------------------------------------------------------------
| Subclass skill multipliers
|--------------------------------------------------------------------------
*/

export const subclassSkillMultipliers = {
  White: {
    healing: 110,
  },

  Grey: {
    faith: 95,
    'magic attack': 15,
    murder: 20,
  },

  Black: {
    'magic attack': 30,
    healing: 90,
    murder: 30,
  },

  Berserker: {
    melee: 110,
    'two handed': 95,

    blade: 95,
    blunt: 90,
    knife: 90,
    projectile: 90,

    stealth: 0,
  },

  Mercenary: {
    attack: 120,
    defense: 120,
    melee: 120,
    'two handed': 120,
    'double wielding': 120,

    axe: 120,
    blade: 120,
    blunt: 120,
    knife: 120,
    flail: 120,
    projectile: 120,
    ranged: 0,

    stealing: 0,
    locks: 0,
    stealth: 0,

    faith: 0,
    'magic attack': 0,
    healing: 0,
    nature: 0,
  },

  Paladin: {
    defense: 100,

    blade: 90,
    blunt: 110,
    knife: 70,

    stealing: 0,

    faith: 45,
    'magic attack': 50,
    healing: 50,
  },

  Antipaladin: {
    defense: 100,

    blade: 90,
    blunt: 110,
    knife: 70,

    stealing: 0,

    faith: 45,
    'magic attack': 50,
    healing: 50,
  },

  Ranger: {
    defense: 100,

    axe: 110,
    blade: 90,
    ranged: 95,

    stealth: 20,

    nature: 55,
  },

  Warrior: {
    attack: 100,
    'two handed': 95,
    defense: 110,

    axe: 95,
    blade: 95,
    blunt: 95,
    knife: 95,
    flail: 95,
    projectile: 95,
  },

  Druid: {
    telepathy: 20,
    faith: 21,
    'magic defense': 80,
    nature: 105,
  },

  HealerMage: {
    faith: 21,
    'magic attack': 92,
    'magic defense': 110,
    telepathy: 10,
    healing: 52,
    nature: 33,
  },

  Necromancer: {
    telepathy: 63,
    murder: 20,
  },

  Warlock: {
    telepathy: 63,
  },

  Wizard: {
    telepathy: 42,
    nature: 21,
  },

  Sorcerer: {
    'magic attack': 108,
    telepathy: 103,
  },

  Illusionist: {
    attack: 50,
    'two handed': 30,
    'double wielding': 30,

    'magic attack': 110,
    'magic defense': 35,
    telepathy: 80,

    bargaining: 20,
  },

  Priest: {
    nature: 50,
  },

  HealerMonk: {
    faith: 90,
    healing: 76,
    nature: 33,
  },

  Scholar: {
    conjuring: 25,
    nature: 50,
  },

  Shaman: {
    'magic attack': 50,
    conjuring: 20,
    faith: 110,
    healing: 30,
    nature: 50,
  },

  Bard: {
    acrobatics: 30,
    entertaining: 90,
    nature: 40,

    locks: 60,
    murder: 90,
    stealing: 60,
    stealth: 60,
  },

  Ninja: {
    attack: 110,
    telepathy: 40,
    acrobatics: 60,

    locks: 60,
    stealing: 30,
    stealth: 80,
  },

  Assassin: {
    attack: 110,
    telepathy: 40,
    acrobatics: 60,

    locks: 60,
    stealing: 30,
    stealth: 80,
  },

  Thief: {
    attack: 105,
    acrobatics: 65,

    locks: 105,
    murder: 80,
    stealing: 105,
    stealth: 100,
    bargaining: 40,
  },

  Air: {
    attack: 105,
    defense: 126,
    melee: 126,
    charging: 105,

    conjuring: 105,
    faith: 147,
    'magic attack': 126,
    'magic defense': 147,
    telepathy: 126,
    healing: 84,
    acrobatics: 105,
    entertaining: 63,
    nature: 126,

    locks: 21,
    stealing: 21,
    stealth: 126,
  },

  Bone: {
    attack: 100,
    defense: 84,
    melee: 110,
    charging: 126,

    conjuring: 110,
    faith: 136,
    'magic attack': 130,
    'magic defense': 130,
    telepathy: 126,
    healing: 120,
    acrobatics: 63,
    entertaining: 25,
    nature: 126,

    locks: 21,
    stealing: 21,
    stealth: 84,
    murder: 147,
  },

  Earth: {
    attack: 147,
    defense: 147,
    melee: 147,
    charging: 126,

    conjuring: 105,
    faith: 84,
    'magic attack': 105,
    'magic defense': 105,
    telepathy: 105,
    healing: 84,
    acrobatics: 63,
    entertaining: 63,
    nature: 126,

    locks: 21,
    stealing: 21,
    stealth: 105,
  },

  Fire: {
    attack: 147,
    defense: 126,
    melee: 126,
    charging: 84,

    conjuring: 105,
    faith: 84,
    'magic attack': 126,
    'magic defense': 126,
    telepathy: 105,
    healing: 84,
    acrobatics: 105,
    entertaining: 105,
    nature: 105,

    locks: 21,
    murder: 147,
    stealing: 126,
    stealth: 84,
  },

  Ice: {
    attack: 100,
    defense: 84,
    melee: 105,
    charging: 126,

    conjuring: 126,
    faith: 84,
    acrobatics: 63,
    entertaining: 84,
    'magic attack': 147,
    'magic defense': 147,
    telepathy: 126,
    healing: 84,
    nature: 126,

    locks: 21,
    stealing: 21,
    stealth: 84,
  },

  Water: {
    attack: 105,
    defense: 105,
    melee: 105,
    charging: 84,

    conjuring: 126,
    faith: 126,
    'magic attack': 105,
    'magic defense': 147,
    telepathy: 126,
    healing: 147,
    acrobatics: 63,
    entertaining: 84,
    nature: 126,

    locks: 21,
    stealing: 21,
    stealth: 84,
  },
};

/*
|--------------------------------------------------------------------------
| Skill training tiers
|--------------------------------------------------------------------------
*/

export const classSkillTiers = {
  Dragon: {
    default: 5,

    attack: 2,
    defense: 2,
    melee: 2,
    charging: 2,
    stealth: 2,
    acrobatics: 2,
    conjuring: 2,
    faith: 2,
    healing: 2,
    'magic attack': 2,
    'magic defense': 2,
    telepathy: 2,
    nature: 2,
    bargaining: 2,
    stealing: 2,
    murder: 2,
    entertaining: 2,
  },

  Fighter: {
    default: 5,

    melee: 1,
    attack: 1,
    defense: 1,
    blade: 1,
    blunt: 1,
    knife: 1,
    projectile: 1,
    axe: 1,
    flail: 1,
    'two handed': 1,
    'double wielding': 1,
    ranged: 1,
    charging: 1,
    riding: 1,

    faith: 2,

    nature: 3,
    'magic attack': 3,
    healing: 3,

    stealth: 4,
    locks: 4,
    bargaining: 4,
    stealing: 4,
  },

  Cleric: {
    default: 5,

    blunt: 1,
    flail: 1,
    healing: 1,
    faith: 1,
    'magic defense': 1,
    bargaining: 1,

    'magic attack': 2,
    conjuring: 2,

    melee: 3,
    knife: 3,
    murder: 3,
    projectile: 3,

    attack: 4,
    defense: 4,
    blade: 4,
    axe: 4,
    'double wielding': 4,
    'two handed': 4,
  },

  Mage: {
    default: 5,

    'magic attack': 1,
    'magic defense': 1,
    conjuring: 1,
    nature: 1,
    telepathy: 1,
    blunt: 1,
    flail: 1,

    healing: 2,

    melee: 3,
    axe: 3,
    knife: 3,
    projectile: 3,

    attack: 4,
    defense: 4,
    'two handed': 4,
    faith: 4,
    'double wielding': 4,
    blade: 4,
    locks: 4,
    bargaining: 4,

    murder: 5,
  },

  Monk: {
    default: 5,

    melee: 1,
    attack: 1,
    defense: 1,
    blunt: 1,
    projectile: 1,
    flail: 1,
    bargaining: 1,
    'magic defense': 1,
    faith: 1,

    axe: 2,
    nature: 2,
    healing: 2,

    knife: 3,
    'magic attack': 3,

    blade: 4,
    conjuring: 4,
  },

  Child: {
    default: 4,
  },

  Default: {
    default: 5,

    stealth: 1,
    melee: 1,
    attack: 1,
    defense: 1,
    knife: 1,
    bargaining: 1,
    murder: 1,
    stealing: 1,
    locks: 1,
    entertaining: 1,
    blunt: 1,
    'double wielding': 1,

    'two handed': 4,
    axe: 4,
    blade: 4,
    flail: 4,
    projectile: 4,
    acrobatics: 4,
    nature: 4,
    telepathy: 4,
  },
};

/*
|--------------------------------------------------------------------------
| Utility helpers
|--------------------------------------------------------------------------
*/

function findCaseInsensitiveKey(object, value) {
  if (!value) {
    return null;
  }

  const normalizedValue = String(value).toLowerCase();

  return Object.keys(object).find((key) => key.toLowerCase() === normalizedValue) || null;
}

function getMountedSkill(race) {
  const normalizedRace = String(race || '').toLowerCase();

  return normalizedRace === 'centaur' || normalizedRace === 'satyr' ? 'charging' : 'riding';
}

/*
|--------------------------------------------------------------------------
| Skill cost functions
|--------------------------------------------------------------------------
*/

export function calculateCostByTier(level, tier) {
  level = parseInt(level) || 0;
  tier = parseInt(tier) || 5;

  const base = level * level;

  switch (tier) {
    case 1:
      return base;

    case 2:
      return base * 3;

    case 3:
      return base * 9;

    case 4:
      return base * 27;

    default:
      return base * 81;
  }
}

export function getSkillTier(charClass, skill) {
  const classKey = findCaseInsensitiveKey(classSkillTiers, charClass);

  const rules = classKey && classKey !== 'Default' ? classSkillTiers[classKey] : classSkillTiers.Default;

  return rules[skill] ?? rules.default ?? 5;
}

function trainingFormula(charClass, level, skill) {
  return calculateCostByTier(level, getSkillTier(charClass, skill));
}

/*
|--------------------------------------------------------------------------
| Warrior specializations
|--------------------------------------------------------------------------
*/

const WARRIOR_SPECIALIZABLE_SKILLS = ['attack', 'two handed', 'axe', 'blade', 'blunt', 'knife', 'flail', 'projectile'];

function applyWarriorSpecializations(multipliers, warriorSpecializations) {
  if (!warriorSpecializations) {
    return;
  }

  const { newbie, elite, legend } = warriorSpecializations;

  if (newbie && WARRIOR_SPECIALIZABLE_SKILLS.includes(newbie)) {
    multipliers[newbie] = 110;
  }

  if (elite && WARRIOR_SPECIALIZABLE_SKILLS.includes(elite)) {
    multipliers[elite] = 110;
  }

  if (legend && WARRIOR_SPECIALIZABLE_SKILLS.includes(legend)) {
    multipliers[legend] = 125;
  }
}

/*
|--------------------------------------------------------------------------
| Public skill multiplier function
|--------------------------------------------------------------------------
*/

export function getSkillMultipliers(charClass, subclass, race, warriorSpecializations = null) {
  /*
   * Start with universal defaults.
   */
  const multipliers = {
    ...BASE_SKILL_MULTIPLIERS,
  };

  /*
   * Apply class multipliers.
   */
  const classKey = findCaseInsensitiveKey(classSkillMultipliers, charClass);

  if (classKey) {
    Object.assign(multipliers, classSkillMultipliers[classKey]);
  }

  /*
   * Existing special handling for Healer subclasses:
   *
   * Mage + Healer => HealerMage
   * Monk + Healer => HealerMonk
   */
  let resolvedSubclass = subclass;

  if (String(subclass || '').toLowerCase() === 'healer') {
    resolvedSubclass = `Healer${charClass}`;
  }

  /*
   * Apply subclass multipliers.
   */
  const subclassKey = findCaseInsensitiveKey(subclassSkillMultipliers, resolvedSubclass);

  if (subclassKey) {
    Object.assign(multipliers, subclassSkillMultipliers[subclassKey]);
  }

  /*
   * Some subclasses use either riding or charging depending on race.
   *
   * Centaur / Satyr => charging
   * Everyone else   => riding
   */
  const mountedSkill = getMountedSkill(race);

  const normalizedSubclass = String(subclass || '').toLowerCase();

  switch (normalizedSubclass) {
    case 'berserker':
      multipliers[mountedSkill] = 80;
      break;

    case 'mercenary':
      multipliers[mountedSkill] = 120;
      break;

    case 'paladin':
    case 'antipaladin':
    case 'ranger':
    case 'warrior':
      multipliers[mountedSkill] = 100;
      break;

    default:
      break;
  }

  /*
   * Warrior specialization overrides.
   */
  if (normalizedSubclass === 'warrior') {
    applyWarriorSpecializations(multipliers, warriorSpecializations);
  }

  /*
   * Skills with a multiplier of 0 are unavailable and should not
   * be returned.
   */
  return Object.fromEntries(Object.entries(multipliers).filter(([, multiplier]) => multiplier > 0));
}

/*
|--------------------------------------------------------------------------
| Skill maximum
|--------------------------------------------------------------------------
*/

export function getSkillMax(multipliers, skill, level) {
  const multiplier = multipliers[skill];

  return Math.floor((multiplier / 20) * (level + 1));
}

/*
|--------------------------------------------------------------------------
| Skill training cost
|--------------------------------------------------------------------------
*/

export function getSkillCost(multipliers, charClass, skill, skillLevel, count) {
  skillLevel = parseInt(skillLevel) || 0;
  count = parseInt(count) || 0;

  if (count <= 0) {
    return 0;
  }

  if (count > 999) {
    count = 999;
  }

  const cost = (trainingFormula(charClass, skillLevel, skill) + 1) * 4;

  return cost + getSkillCost(multipliers, charClass, skill, skillLevel + 1, count - 1);
}

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
|
| These are the defaults before class and subclass modifiers are applied.
| A value of 0 means the skill is unavailable unless enabled by the class
| or subclass.
|
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
|
| Structured as:
|
| classSkillMultipliers[Class][Skill] = multiplier
|
| Skills not listed here retain BASE_SKILL_MULTIPLIERS.
|
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
|
| Structured as:
|
| subclassSkillMultipliers[Subclass][Skill] = multiplier
|
| These override class multipliers.
|
| Special cases such as mounted skills and Warrior specializations are
| handled separately below because they depend on race/player choices.
|
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
| Training formula definitions
|--------------------------------------------------------------------------
|
| Rather than hard-coding the formulas in a large switch statement, each
| class defines which formula applies to which skill.
|
*/

const trainingFormulas = {
  square: (level) => level * level,

  squareTimes3: (level) => level * level * 3,

  squareTimes5: (level) => level * level * 5,

  cube: (level) => level * level * level,

  halfCube: (level) => Math.floor((level * level * level) / 2),

  fourth: (level) => level * level * level * level,

  squareTimesHalfLevel: (level) => level * level * Math.floor(level / 2),

  mageDefense: (level) => level * level * Math.floor(level / 10) * Math.floor(level / 20),

  mageFaith: (level) => level * level * level * Math.floor(level / 5),
};

/*
|--------------------------------------------------------------------------
| Class training rules
|--------------------------------------------------------------------------
|
| Structured as:
|
| classTrainingRules[Class][Skill] = formula name
|
| Any skill not explicitly listed falls back to the class/default formula.
|
*/

export const classTrainingRules = {
  Dragon: {
    default: 'fourth',

    attack: 'squareTimes3',
    defense: 'squareTimes3',
    melee: 'squareTimes3',
    charging: 'squareTimes3',
    stealth: 'squareTimes3',
    entertaining: 'squareTimes3',
    acrobatics: 'squareTimes3',
    conjuring: 'squareTimes3',
    faith: 'squareTimes3',
    healing: 'squareTimes3',
    'magic attack': 'squareTimes3',
    'magic defense': 'squareTimes3',
    telepathy: 'squareTimes3',
    nature: 'squareTimes3',
    bargaining: 'squareTimes3',
    stealing: 'squareTimes3',
    murder: 'squareTimes3',
  },

  Fighter: {
    default: 'fourth',

    axe: 'square',
    flail: 'square',
    melee: 'square',
    attack: 'square',
    defense: 'square',
    'double wielding': 'square',
    charging: 'square',
    riding: 'square',
    'two handed': 'square',
    blade: 'square',
    knife: 'square',
    blunt: 'square',
    projectile: 'square',
    ranged: 'square',
    blocking: 'square',

    'magic attack': 'squareTimes5',
    nature: 'squareTimes5',
    healing: 'squareTimes5',
    faith: 'squareTimes5',

    stealing: 'cube',
    bargaining: 'cube',
    murder: 'cube',
  },

  Cleric: {
    default: 'fourth',

    'magic defense': 'square',
    healing: 'square',
    faith: 'square',
    flail: 'square',
    blunt: 'square',
    bargaining: 'square',

    knife: 'squareTimesHalfLevel',
    murder: 'squareTimesHalfLevel',
    projectile: 'squareTimesHalfLevel',

    axe: 'cube',
    melee: 'cube',
    defense: 'cube',
    conjuring: 'cube',
    'magic attack': 'cube',
  },

  Mage: {
    default: 'fourth',

    'magic attack': 'square',
    'magic defense': 'square',
    conjuring: 'square',
    blunt: 'square',
    flail: 'square',
    telepathy: 'square',
    nature: 'square',

    projectile: 'cube',
    melee: 'cube',
    attack: 'cube',
    knife: 'cube',
    axe: 'cube',
    bargaining: 'cube',

    healing: 'squareTimes5',
    defense: 'mageDefense',
    faith: 'mageFaith',
  },

  Monk: {
    default: 'fourth',

    melee: 'square',
    defense: 'square',
    blunt: 'square',
    projectile: 'square',
    attack: 'square',
    flail: 'square',
    bargaining: 'square',
    'magic defense': 'square',
    faith: 'square',

    'magic attack': 'halfCube',
    axe: 'halfCube',

    healing: 'squareTimes5',
    nature: 'squareTimes5',

    knife: 'cube',
    conjuring: 'cube',
  },

  /*
   * Rogue and any unknown classes use the historical default training rules.
   */
  Default: {
    default: 'fourth',

    stealth: 'square',
    melee: 'square',
    attack: 'square',
    defense: 'square',
    knife: 'square',
    bargaining: 'square',
    murder: 'square',
    stealing: 'square',
    locks: 'square',
    entertaining: 'square',
    blunt: 'square',
    'double wielding': 'square',

    flail: 'cube',
    axe: 'cube',
    nature: 'cube',
    telepathy: 'cube',
    acrobatics: 'cube',
    blade: 'cube',
    projectile: 'cube',
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

function getTrainingRules(charClass) {
  const classKey = findCaseInsensitiveKey(classTrainingRules, charClass);

  return classKey ? classTrainingRules[classKey] : classTrainingRules.Default;
}

function trainingFormula(charClass, skill, level) {
  const rules = getTrainingRules(charClass);

  const formulaName = rules[skill] || rules.default || 'fourth';

  const formula = trainingFormulas[formulaName] || trainingFormulas.fourth;

  return formula(level);
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
| Public calculator functions
|--------------------------------------------------------------------------
*/

export function getSkillMultipliers(charClass, subclass, race, warriorSpecializations = null) {
  /*
   * Start with the universal defaults.
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
   * Healer is class-specific in the existing data:
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
   * Mounted skill varies by race.
   *
   * Centaur / Satyr:
   *   charging
   *
   * Everyone else:
   *   riding
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
   * Warrior specialization multipliers override normal Warrior values.
   */
  if (normalizedSubclass === 'warrior') {
    applyWarriorSpecializations(multipliers, warriorSpecializations);
  }

  /*
   * Remove unavailable skills.
   *
   * This preserves the existing behavior where a skill with multiplier 0
   * does not appear in the returned multiplier collection.
   */
  return Object.fromEntries(Object.entries(multipliers).filter(([, multiplier]) => multiplier > 0));
}

export function getSkillMax(multipliers, skill, level) {
  const multiplier = multipliers[skill];

  return Math.floor((multiplier / 20) * (level + 1));
}

export function getSkillCost(multipliers, charClass, skill, skillLevel, count) {
  skillLevel = parseInt(skillLevel);
  count = parseInt(count);

  if (!count || count <= 0) {
    return 0;
  }

  if (count > 999) {
    count = 999;
  }

  const cost = (trainingFormula(charClass, skill, skillLevel) + 1) * 4;

  return cost + getSkillCost(multipliers, charClass, skill, skillLevel + 1, count - 1);
}

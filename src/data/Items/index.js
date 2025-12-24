/**
 * Level Values
 *
 * 1: Newbie
 * 2: Mid
 * 3: HM
 * 4: Elite
 * 5: Legendary
 */

const items = [
  {
    name: 'Crystal Ball',
    subarea: 'Cabeiri',
    details: 'Newbie level magic defense item.',
    isQuest: true,
    level: 1,
  },
  {
    name: 'Blue Eyes',
    subarea: 'Mystic Forest',
    details: 'HM level magic defense item.',
    isQuest: true,
    level: 3,
  },
  {
    name: 'Black Swirling Orb',
    subarea: 'Holgresh',
    details: 'Elite level magic defense item.',
    isQuest: false,
    level: 4,
  },
  {
    name: 'Irredescent Pearls',
    subarea: '',
    details: 'Legandary (120+) level magic defense item.',
    isQuest: false,
    level: 5,
  },
].sort((a, b) => a.level - b.level || a.number - b.number);

const weapons = [
  {
    name: 'Newbie Sword',
    subarea: 'Cabeiri',
    details: 'Newbie item upon character creation',
  },
].sort((a, b) => a.level - b.level || a.number - b.number);

const armor = [
  {
    name: 'Newbie Armor',
    subarea: 'Cabeiri',
    details: 'Newbie item upon character creation',
  },
].sort((a, b) => a.level - b.level || a.number - b.number);

export { items, weapons, armor };

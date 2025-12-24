const levelNames = {
  1: 'Newbie',
  2: 'Mid',
  3: 'HM',
  4: 'Elite',
  5: 'Legendary',
};

const getLevelName = (level) => levelNames[level] ?? 'Unknown';

export { getLevelName };

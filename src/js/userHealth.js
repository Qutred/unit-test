const getUserHealth = (character) => {
  let health = '';
  if (character.health > 50) {
    health = 'healthy';
  } else if (character.health <= 50 && character.health >= 15) {
    health = 'wounded';
  } else if (character.health < 15) {
    health = 'critical';
  }

  return health;
};

const sortHeroesByHealth = (characters) => characters.sort(
  (character1, character2) => character2.health - character1.health,
);

export { getUserHealth, sortHeroesByHealth };

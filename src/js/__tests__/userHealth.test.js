import { getUserHealth, sortHeroesByHealth } from '../userHealth';

test('character health healthy test', () => {
  const character = { name: 'Маг', health: 90 };
  expect(getUserHealth(character)).toBe('healthy');
});

test('character health wounded test', () => {
  const character = { name: 'Маг', health: 49 };
  expect(getUserHealth(character)).toBe('wounded');
});

test('character health critical test', () => {
  const character = { name: 'Маг', health: 10 };
  expect(getUserHealth(character)).toBe('critical');
});

test('sort characters', () => {
  const characters = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const result = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(sortHeroesByHealth(characters)).toEqual(result);
});

import Character from '../classes/characterBase';
import DarkSids from '../classes/darkCharacter';

test('create hero and test attack', () => {
  const hero = new Character('hero');
  expect(hero.attack()).toBe(100);
});

test('сreating character', () => {
  const deamon = new DarkSids('deamon');
  expect(deamon).toBeInstanceOf(Character);
});

test('сreating character with wrong type', () => {
  expect(() => {
    new DarkSids('angel');
  }).toThrow(new Error('Не темный персонаж'));
});

test.each([
  ['deamon', 2, 90],
  ['deamon', 3, 80],
  ['deamon', 4, 70],
  ['magician', 2, 90],
])('attack %s without stoned distance %s', (type, distance, damage) => {
  const hero = new DarkSids(type);
  expect(hero.attack(distance)).toBe(damage);
});

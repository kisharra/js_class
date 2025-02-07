import Character from '../src/character.js';

describe('Character class - types', () => {
  const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
  const typeAttributes = {
    Bowman: { attack: 25, defence: 25 },
    Swordsman: { attack: 40, defence: 10 },
    Magician: { attack: 10, defence: 40 },
    Daemon: { attack: 10, defence: 40 },
    Undead: { attack: 25, defence: 25 },
    Zombie: { attack: 40, defence: 10 },
  };

  validTypes.forEach((type) => {
    test(`should correctly initialize ${type}`, () => {
      const character = new Character('Test', type);
      expect(character.type).toBe(type);
      expect(character.attack).toBe(typeAttributes[type].attack);
      expect(character.defence).toBe(typeAttributes[type].defence);
    });
  });
});
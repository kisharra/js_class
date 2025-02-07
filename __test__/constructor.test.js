import Character from '../src/character.js';

describe('Character class - constructor', () => {
    test('should throw an error for invalid name length', () => {
      expect(() => new Character('A', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
      expect(() => new Character('ThisIsAVeryLongName', 'Bowman')).toThrow('Имя должно быть строкой от 2 до 10 символов.');
    });
  
    test('should throw an error for invalid type', () => {
      expect(() => new Character('Test', 'InvalidType')).toThrow('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    });
  
    test('should initialize default values correctly', () => {
      const character = new Character('Test', 'Bowman');
      expect(character.name).toBe('Test');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(25);
      expect(character.defence).toBe(25);
    });
  });
import { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie } from '../src/character.js';

describe('Character class', () => {
  describe('constructor', () => {
    test('should throw an error if name is not a string', () => {
      expect(() => new Character(123, 'Bowman', 25, 25)).toThrowError('Имя должно быть строкой от 2 до 10 символов.');
    });

    test('should throw an error if name length is less than 2', () => {
      expect(() => new Character('A', 'Bowman', 25, 25)).toThrowError('Имя должно быть строкой от 2 до 10 символов.');
    });

    test('should throw an error if name length is more than 10', () => {
      expect(() => new Character('ABCDEFGHIJK', 'Bowman', 25, 25)).toThrowError('Имя должно быть строкой от 2 до 10 символов.');
    });

    test('should throw an error if type is invalid', () => {
      expect(() => new Character('John', 'InvalidType', 25, 25)).toThrowError('Тип должен быть одним из: Bowman, Swordsman, Magician, Daemon, Undead, Zombie.');
    });

    test('should create a valid character', () => {
      const character = new Character('John', 'Bowman', 25, 25);
      expect(character.name).toBe('John');
      expect(character.type).toBe('Bowman');
      expect(character.health).toBe(100);
      expect(character.level).toBe(1);
      expect(character.attack).toBe(25);
      expect(character.defence).toBe(25);
    });
  });

  describe('levelUp method', () => {
    test('should throw an error if health is 0', () => {
      const character = new Character('John', 'Bowman', 25, 25);
      character.health = 0;
      expect(() => character.levelUp()).toThrowError('Нельзя повысить уровень умершего персонажа.');
    });

    test('should increase level, attack, defence and reset health', () => {
      const character = new Character('John', 'Bowman', 25, 25);
      character.levelUp();
      expect(character.level).toBe(2);
      expect(character.attack).toBeCloseTo(30); // 25 * 1.2 = 30
      expect(character.defence).toBeCloseTo(30); // 25 * 1.2 = 30
      expect(character.health).toBe(100);
    });
  });

  describe('damage method', () => {
    test('should reduce health based on damage and defence', () => {
      const character = new Character('John', 'Bowman', 25, 25);
      character.damage(50); // 50 * (1 - 25/100) = 50 * 0.75 = 37.5
      expect(character.health).toBeCloseTo(62.5);
    });

    test('should set health to 0 if it drops below 0', () => {
      const character = new Character('John', 'Bowman', 25, 25);
      character.health = 10;
      character.damage(100); // 100 * (1 - 25/100) = 100 * 0.75 = 75
      expect(character.health).toBe(0);
    });
  });
});

describe('Subclasses of Character', () => {
  test('Bowman should have correct default values', () => {
    const bowman = new Bowman('Legolas');
    expect(bowman.name).toBe('Legolas');
    expect(bowman.type).toBe('Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);
  });

  test('Swordsman should have correct default values', () => {
    const swordsman = new Swordsman('Arthur');
    expect(swordsman.name).toBe('Arthur');
    expect(swordsman.type).toBe('Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);
  });

  test('Magician should have correct default values', () => {
    const magician = new Magician('Gandalf');
    expect(magician.name).toBe('Gandalf');
    expect(magician.type).toBe('Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);
  });

  test('Daemon should have correct default values', () => {
    const daemon = new Daemon('Mephisto');
    expect(daemon.name).toBe('Mephisto');
    expect(daemon.type).toBe('Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  test('Undead should have correct default values', () => {
    const undead = new Undead('Zombie');
    expect(undead.name).toBe('Zombie');
    expect(undead.type).toBe('Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);
  });

  test('Zombie should have correct default values', () => {
    const zombie = new Zombie('Walker');
    expect(zombie.name).toBe('Walker');
    expect(zombie.type).toBe('Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);
  });
});
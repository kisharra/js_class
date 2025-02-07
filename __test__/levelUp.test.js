import Character from '../src/character.js';

describe('Character class - levelUp method', () => {
    let character;
  
    beforeEach(() => {
      character = new Character('Test', 'Bowman');
    });
  
    test('should increase level by 1', () => {
      character.levelUp();
      expect(character.level).toBe(2);
    });
  
    test('should increase attack and defence by 20%', () => {
      const initialAttack = character.attack;
      const initialDefence = character.defence;
  
      character.levelUp();
  
      expect(character.attack).toBeCloseTo(initialAttack * 1.2);
      expect(character.defence).toBeCloseTo(initialDefence * 1.2);
    });
  
    test('should reset health to 100', () => {
      character.damage(80); // Наносим урон, чтобы уменьшить здоровье
      expect(character.health).toBeLessThan(100);
  
      character.levelUp();
  
      expect(character.health).toBe(100);
    });
  
    test('should throw an error if character is dead', () => {
      character.health = 0;
  
      expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа.');
    });
  
    test('should handle multiple level ups correctly', () => {
      character.levelUp();
      character.levelUp();
  
      expect(character.level).toBe(3);
      expect(character.attack).toBeCloseTo(25 * 1.2 * 1.2);
      expect(character.defence).toBeCloseTo(25 * 1.2 * 1.2);
      expect(character.health).toBe(100);
    });
  
    test('should not allow level up if health is exactly 0', () => {
      character.health = 0;
  
      expect(() => character.levelUp()).toThrow('Нельзя повысить уровень умершего персонажа.');
    });
  });
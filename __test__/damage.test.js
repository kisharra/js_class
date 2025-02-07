import Character from '../src/character.js';

describe('Character class - damage method', () => {
    let character;
  
    beforeEach(() => {
      character = new Character('Test', 'Bowman');
    });
  
    test('should reduce health correctly based on defence', () => {
      const initialHealth = character.health;
      const damagePoints = 50;
  
      character.damage(damagePoints);
  
      const expectedHealth = initialHealth - damagePoints * (1 - character.defence / 100);
      expect(character.health).toBeCloseTo(expectedHealth);
    });
  
    test('health should not drop below 0', () => {
      character.health = 10;
      character.damage(100);
  
      expect(character.health).toBe(0);
    });
  
    test('should handle zero damage correctly', () => {
      const initialHealth = character.health;
  
      character.damage(0);
  
      expect(character.health).toBe(initialHealth);
    });
  
    test('should handle large damage correctly', () => {
      character.damage(1000);
  
      expect(character.health).toBe(0);
    });
  
    test('should not allow negative health', () => {
      character.damage(200);
  
      expect(character.health).toBe(0);
    });
  });
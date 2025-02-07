class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error("Имя должно быть строкой от 2 до 10 символов.");
      }
  
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
        throw new Error(`Тип должен быть одним из: ${validTypes.join(', ')}.`);
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
  
      switch (type) {
        case 'Bowman':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Swordsman':
          this.attack = 40;
          this.defence = 10;
          break;
        case 'Magician':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Daemon':
          this.attack = 10;
          this.defence = 40;
          break;
        case 'Undead':
          this.attack = 25;
          this.defence = 25;
          break;
        case 'Zombie':
          this.attack = 40;
          this.defence = 10;
          break;
      }
    }
  
    levelUp() {
      if (this.health === 0) {
        throw new Error('Нельзя повысить уровень умершего персонажа.');
      }
  
      this.level += 1;
      this.attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    }
  
    damage(points) {
      const damageTaken = points * (1 - this.defence / 100);
      this.health -= damageTaken;
      if (this.health < 0) {
        this.health = 0;
      }
    }
  }

  // class Bowman extends Character {
  //   constructor(name, type = 'Bowman') {
  //     super(name, type);
  //   }
  // }
  
  // class Swordsman extends Character {
  //   constructor(name, type = 'Swordsman') {
  //     super(name, type);
  //   }
  // }
  
  // class Magician extends Character {
  //   constructor(name, type = 'Magician') {
  //     super(name, type);
  //   }
  // }
  
  // class Daemon extends Character {
  //   constructor(name, type = 'Daemon') {
  //     super(name, type);
  //   }
  // }
  
  // class Undead extends Character {
  //   constructor(name, type = 'Undead') {
  //     super(name, type);
  //   }
  // }
  
  // class Zombie extends Character {
  //   constructor(name, type = 'Zombie') {
  //     super(name, type);
  //   }
  // }

export default Character;
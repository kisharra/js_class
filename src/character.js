class Character {
  constructor(name, type, attack, defence) {
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
    this.attack = attack;
    this.defence = defence;
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

class Bowman extends Character {
  constructor(name) {
    super(name, 'Bowman', 25, 25);
  }
}

class Swordsman extends Character {
  constructor(name) {
    super(name, 'Swordsman', 40, 10);
  }
}

class Magician extends Character {
  constructor(name) {
    super(name, 'Magician', 10, 40);
  }
}

class Daemon extends Character {
  constructor(name) {
    super(name, 'Daemon', 10, 40);
  }
}

class Undead extends Character {
  constructor(name) {
    super(name, 'Undead', 25, 25);
  }
}

class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie', 40, 10);
  }
}

export { Character, Bowman, Swordsman, Magician, Daemon, Undead, Zombie };
class Animal {
  constructor(type, name, color) {
    this.type = type
    this.name = name;
    this.color = color;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw TypeError("Что-то пошло не так");
    }
    this._name = newName;
  }
  get color() {
    return this._color;
  }
  set color(newColor) {
    if (typeof newColor !== "string") {
      throw TypeError("Что-то пошло не так");
    }
    this._color = newColor;
  }

  getMove() {
    return "Move";
  }

  getEat() {
    return "Eat";
  }
  getSpeech() {
    return "Speech";
  }
}
class Cat extends Animal {
  constructor(type,name, color) {
    super('Cat',name, color);
  }
  getSpeech() {
    return `${this.type} Meow`;
  }
}
class Dog extends Animal {
  constructor(type,name, color) {
    super('Dog',name, color);
  }
  getSpeech() {
    return `${this.type} Gav`;
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
  }
  trainerSpeech  (animal) {return animal.getSpeech};
  trainerEat (animal)  {return animal.getEat};
  trainerMove  (animal)  {return animal.getMove};
}

const cat = new Cat("Barsik", "black");
const dog = new Dog("Anton", "white");
const trainer = new Trainer("Billy");

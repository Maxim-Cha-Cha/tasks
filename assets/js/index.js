class Animal {
  constructor(name, color) {
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
    this._name = newName
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
  constructor(name, color) {
    super(name, color);
  }
  getSpeech() {
    return "Meow";
  }
}
class Dog extends Animal {
  constructor(name, color) {
    super(name, color);
  }
  getSpeech() {
    return "Gav";
  }
}

class Trainer {
  constructor(name) {
    this.name = name;
  }
  trainerSpeech = (animal) => animal.getSpeech;
  trainerEat = (animal) => animal.getEat;
  trainerMove = (animal) => animal.getMove;
}

const cat = new Cat("Barsik", "black");
const dog = new Dog("Anton", "white");
const trainer = new Trainer("Billy");

// class Animal {
//   constructor(type, name, color) {
//     this.type = type
//     this.name = name;
//     this.color = color;
//   }
//   get name() {
//     return this._name;
//   }
//   set name(newName) {
//     if (typeof newName !== "string") {
//       throw TypeError("Что-то пошло не так");
//     }
//     this._name = newName;
//   }
//   get color() {
//     return this._color;
//   }
//   set color(newColor) {
//     if (typeof newColor !== "string") {
//       throw TypeError("Что-то пошло не так");
//     }
//     this._color = newColor;
//   }

//   getMove() {
//     return "Move";
//   }

//   getEat() {
//     return "Eat";
//   }
//   getSpeech() {
//     return "Speech";
//   }
// }
// class Cat extends Animal {
//   constructor(type,name, color) {
//     super('Cat',name, color);
//   }
//   getSpeech() {
//     return `${this.type} Meow`;
//   }
// }
// class Dog extends Animal {
//   constructor(type,name, color) {
//     super('Dog',name, color);
//   }
//   getSpeech() {
//     return `${this.type} Gav`;
//   }
// }

// class Trainer {
//   constructor(name) {
//     this.name = name;
//   }
//   trainerSpeech  (animal) {return animal.getSpeech};
//   trainerEat (animal)  {return animal.getEat};
// //   trainerMove  (animal)  {return animal.getMove};
// // }

// // const cat = new Cat("Barsik", "black");
// // const dog = new Dog("Anton", "white");
// // const trainer = new Trainer("Billy");

// // const Dog = {
// //   head: { eyes: "green", nose: "black" },
// //   rama: { color: "white", fleas: "yes" },
// //   paws: 4,
// //   tail: {
// //     lain: 1,
// //     unit: "m",
// //   },
// // };

// // const {
// //   head: { eyes, nose },
// //   rama: { color, fleas },
// //   paws,
// //   tail: { lain, unit },
// // } = Dog;

// const num = [1, 2, 3, 4, 3, 1, 0, 8];
// const animals = ["dog",0, "cat",3, "dog", "snake"];

// const num2 = new Set();
// const animals2 = new Set(animals);

// const user1 = {
//   id: 1,
//   name: "John",
//   lastName: "Doe",
// };

// const user2 = {
//   id: 2,
//   name: "Jane",
//   lastName: "NotDoe",
// };

// const johnMessges = ["Hi", "Bye"];

// const janeMessages = ["Hello", "Good Bye"];
// const map = new Map();

// map.set(user1, johnMessges);
// map.set(user2, janeMessages);
// const usersMessagas = (user) => {
//   if (user1) {
//     return johnMessges;
//   }else i
//   return janeMessages;
// };

const factorial = (num) =>
  num === 1 || num === 0
    ? num
    : num < 1 || typeof num !== "string"
    ? RangeError("Error")
    : num * factorial(num - 1);

const toPower = function (num, exp) {
  if (exp === 1) {
    return num;
  } else if (exp > 1) {
    return num * toPower(num, exp - 1);
  } else if (exp < 1) {
    return 1 / (num / toPower(num, Math.abs(exp)-1));
  }
};

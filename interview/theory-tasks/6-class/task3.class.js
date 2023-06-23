class ReptileEgg {
  giveBirth() {
    return new Reptile();
  }
}
class Reptile {
  giveBirth() {
    return new ReptileEgg();
  }
}
class Mammal extends Reptile {
  giveBirth() {
    return new Mammal();
  }
}

class Dog extends Mammal {
  giveBirth() {
    return new Dog();
  }
}
class Cat extends Mammal {
  giveBirth() {
    // Mammal? // 1
  }
}
class Bird extends Mammal {
  giveBirth() {
    // ReptileEgg? // 2
  }
}

const dog = new Dog();
const cat = new Cat();
const bird = new Bird();

const child1 = dog.giveBirth();
const child2 = cat.giveBirth();
const child3 = bird.giveBirth();

if (!(child1 instanceof Dog)) throw new Error(`is not a dog`);
if (!(child2 instanceof Mammal)) throw new Error(`is not a cat`);
if (!(child3 instanceof ReptileEgg)) throw new Error(`is not a cat`);

console.log('is done!');
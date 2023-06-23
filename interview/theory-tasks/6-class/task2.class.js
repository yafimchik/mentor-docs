class Mammal {
  constructor() {}

  giveBirth() {
    return // new instance of Animal :) Not Mammal!
  }
}

class Dog extends Mammal {}
class Cat extends Mammal {}

const dog = new Dog();
const cat = new Cat();

const child1 = dog.giveBirth();
const child2 = cat.giveBirth();

if (!(child1 instanceof Dog)) throw new Error(`is not a dog`);
if (!(child2 instanceof Cat)) throw new Error(`is not a cat`);

console.log('is done!');
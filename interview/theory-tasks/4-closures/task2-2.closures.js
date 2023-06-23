const superFunction = () => {
  console.log(this.superProperty);
}

class SuperClass {
  constructor() {
    this.superProperty = 'SUPER !!!';
  }

  superMethod() {
    superFunction(); // 1:
    setTimeout(superFunction, 1000); // 2:
  }
}

const superObject = new SuperClass();

superObject.superMethod(); // ?

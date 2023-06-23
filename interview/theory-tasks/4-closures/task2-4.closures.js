class SuperClass {
  constructor() {
    this.superProperty = 'SUPER !!!';
  }

  superMethod() {
    const superFunction = () => {
      console.log(this.superProperty);
    }
    superFunction(); //  1
    setTimeout(superFunction, 1000); // 2
  }
}

const superObject = new SuperClass();

superObject.superMethod(); // ?
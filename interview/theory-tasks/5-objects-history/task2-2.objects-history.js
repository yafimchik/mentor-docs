function FunctionConstructor() {
  this.a = 'a';
  this.b = 'b';
  return { 'I-am' : 'I am' };
}

const var1 = FunctionConstructor();
const var2 = new FunctionConstructor();

console.log(var1); // 1:
console.log(var2); // 2:
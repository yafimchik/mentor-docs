console.log(b);  // 1:
function fn(a) {
  b = 10;
  console.log('a + b =', a + b);
}
console.log(b);  // 2:
fn(12);       // 3:
console.log(b);  // 4:
var b = 15;
console.log(b);  // 5:
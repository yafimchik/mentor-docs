const arr = [10, 12, 15, 21];
console.log('start');
for (i = 0; i < arr.length; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, 2000);
}
console.log('end');
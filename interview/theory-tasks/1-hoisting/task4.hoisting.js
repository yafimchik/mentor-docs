(function (){
  try {
    throw new Error();
  } catch (x) {
    var x = 1, y = 2;
    console.log('#1: ', x);
  }

  console.log('#2: ', x);
  console.log('#3: ', y);
})();
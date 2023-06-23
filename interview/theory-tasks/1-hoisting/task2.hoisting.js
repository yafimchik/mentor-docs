var a = 3;
function fn2() {
  if (a) {
    console.log(a);  // ?
    var a = 5;
  }
}

fn2();
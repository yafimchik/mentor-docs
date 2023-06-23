var length = 10;

function fn () {
    console.log(this.length);
}

var obj = {
    length: 5,
    method: function (fn) {
        fn();                                   // 1
        arguments[0]();                         // 2
        console.log(this.length);               // 3
    }
};

obj.method(fn, 1); // ?

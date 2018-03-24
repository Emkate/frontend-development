"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// var evenPredicate = v => v % 2 === 0;
// var evens = [1,2,3,4,5,6].filter(evenPredicate);

// evens.forEach(v => console.log(v));

// var aShape = {
//     x: 4,
//     y: 3,
//     move: delta => this.x += delta
// };


// var aShape = {
//     numbers: [1,2,3,4,5,6],
//     scale: 2,
//     move: function(){
//         this.numbers = this.numbers.map((el) => {
//             return el * this.scale;
//         });
//     }
// }

// aShape.move();

// aShape.numbers.forEach(el => {
//     console.log(el);
// });

var Shape = function Shape(x, y) {
    _classCallCheck(this, Shape);

    this.x = x;
    this.y = y;
};

;

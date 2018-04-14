"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Student = function Student(name, yob) {
  _classCallCheck(this, Student);

  this.name = name;
  this.yob = yob;
};

function sayHello(person) {
  console.log("Hello ".concat(person.name));
}

var zenek = new Student('Zenon', 1995);
console.log(zenek.name);
var ziutek = {
  name: 'Ziutek',
  yob: 1963
};
var myList = [ziutek, zenek];
var myTuple = ["Fiat", 1998];
console.log(myTuple[0]);
sayHello(ziutek);
var Color;

(function (Color) {
  Color[Color["Red"] = 0] = "Red";
  Color[Color["Green"] = 1] = "Green";
  Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));

;
console.log(Color.Red);
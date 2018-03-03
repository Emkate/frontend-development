// var obj = {
//     name: "Paweł",
//     surname: "Bambaryła",
//     birthdate: "03/03"
// };

// // console.log(obj.name);

// obj.town = "Gdańsk";

// // console.log(obj['town']);

// // console.log(obj);

// var someArray = [1,2,'trzy'];

// someArray.push(5);

// someArray.town = "Gdańsk";

// // console.log(someArray.length);
// // console.log(someArray.town);
// // console.log(someArray);



// // console.log(typeof new Array());    // object
// // console.log(typeof new Number(2));  // object
// // console.log(typeof 2);              // number
// // console.log(typeof new Boolean(2)); // object
// // console.log(typeof true);           // boolean
// // console.log(typeof null);           // object
// // console.log(typeof NaN);            // number

// // console.log(typeof multiply);
// // console.log(typeof add);

// function multiply(a){
//     return a * a;
// }

// var add = function(a, b){
//     return a + b;
// }

// // console.log(add(1,2));




// var higherOrderFunction = function(a, b){
//     return a(b) + b;
// }


// // console.log(higherOrderFunction(multiply, 4));


// var counter = function(){
//     var i = 0;
//     return function(){
//         return ++i;
//     };
// };

// // var c = counter();

// // c();
// // c();
// // c();

// // console.log(c());

// // var d = counter();

// // d();
// // d();

// // console.log(d());

// var lib = {};

// lib.module = (function(){
//     var priv1 = 0;
//     var priv2 = "Hello";


//     return {
//         message: priv2 + " World",
//         counter: function(){
//             return ++priv1;
//         },
//         sayHello: function(name){
//             return "Hello " + name;
//         }
//     };
// })();

// // console.log(lib.module.sayHello("Ziutek\n"));
// // console.log(lib.module.counter());
// // console.log(lib.module.counter());


// function z(){
//     console.log(this.imie);
// }

// imie = "Ziutek";

// // z();

// function Person(name){
//     this.name = name;
// }

// var ziutek = new Person("Ziutek");
// var heniek = Person("Heniek");

// // console.log(ziutek.name);
// // console.log(heniek.name);


// function dajGlos(zwierze){
//     return console.log("Jestem " + zwierze + " bo mówię " + this.message);
// }

// var kaczka = {
//     message: "KWA, KWA"
// };

// var pies = {
//     message: "Hau, Hau"
// }

// dajGlos.apply(kaczka, ['kaczka']);
// dajGlos.apply(pies, ['pies']);


var movies = (function(){

})();

function Series(title, seasons){
    this.title = title;
    this.seasons = seasons;
}

var numbers = [1,2,23,4,5,6,1,24,15,11,18];

var evenNumbers = numbers.filter(function(item){
    return item%2 === 0;
}); 

var sortAsc = numbers.sort(function(a, b){
    if(a > b){
        return 1;
    }
    else{
        return -1;
    }
});

console.log(evenNumbers);
console.log(sortAsc);

var series = [
    
];
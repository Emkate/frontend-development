
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

// class Shape {
//     constructor (x, y) {
//         this.x = x;
//         this.y = y;
//     }

//     move(delta) {
//         this.x += delta;
//         this.y += delta;
//     }

//     moveToZero() {
//         this.x = 0;
//         this.y = 0;
//     }
// };

// var aShape = new Shape(2,3);
// aShape.move(5);

// console.log(aShape.x);

/*
    zadanie: 
    własny moduł z dziedziczeniem w ES6 (klasy, konstruktor)
    przy użyciu:
    -lambda
    -klasy,
    -template stringi,
    -wartość default,
    -let, const,
    -iteratory
*/

class Movie {
    constructor(name, year){
        this.name = name;
        this.year = year;
        this.database = dbSeries;
    };

    showData(){
        return this;
    };
    getMovieByYear(year = 2017){
        return this.database.filter((el) => {
            return el.year === year;
        })
    };
}

class Series extends Movie{
    constructor(name, year, finishYear, seasons = 1){
        super(name, year);
        this.finishYear = finishYear;
        this.seasons = seasons;
    }

    yearLength (){ return this.finishYear - this.year };
    
}

let dbSeries = [{
    name: "Sopranos",
    year: 1999,
    finishYear: 2007,
    seasons: 5
},
{
    name: "Boardwalk Empire",
    year: 2011,
    finishYear: 2014,
    seasons: 4
}];

let newMovie = new Movie("Breaking Bad", 2008);
let newSeries = new Series("Breaking Bad", 2008, 2012);


// console.log(newSeries.showData());
// console.log(newSeries.yearLength());
console.log(newSeries.getMovieByYear(1999));
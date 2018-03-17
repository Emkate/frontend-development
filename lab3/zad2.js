function Movie(name, year){
    this.name = name;
    this.year = year;
}

Movie.prototype.showData = function(){
    return this;
};

function Series(name, year, finishYear, seasons) {
    Movie.call(this, name, year);
    this.finishYear = finishYear;
    this.seasons = seasons;
}

Series.prototype = Object.create(Movie.prototype);
Series.prototype.constructor = Series;

Series.prototype.yearLength = function(){
    return this.finishYear - this.year;
};

var aSeries = new Series("Breaking Bad", 2008, 2012, 5);

console.log(Series.prototype);
console.log(aSeries.showData());
console.log(aSeries.yearLength());
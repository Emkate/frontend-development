// homework task


var lib = {};

lib.seriesDatabase = (function () {
    "use strict";
    var seriesList = [
        {
            name: "Breaking Bad",
            start_year: 2008,
            end_year: 2013
        },
        {
            name: "Narcos",
            start_year: 2015,
            end_year: null
        },
        {
            name: "Game of Thrones",
            start_year: 2011,
            end_year: 2019
        },
        {
            name: "Boardwalk Empire",
            start_year: 2010,
            end_year: 2014
        },
        {
            name: "Sopranos",
            start_year: 1999,
            end_year: 2007
        }
    ];

    return {
        addNewSeries: function (series) {
            seriesList.push(series);
            return seriesList;
        },
        showAllSeries: function () {
            return seriesList;
        },
        showSeriesNewerThan: function (year) {
            return seriesList.filter(function (seriesItem) {
                return seriesItem.start_year >= year;
            });
        }

    };
}());

// console.log(lib.seriesDatabase.addNewSeries({
//     name: "Jakiś serial",
//     start_year: 1999,
//     end_year: 2007
// }));
// console.log(lib.seriesDatabase.showAllSeries());
// console.log(lib.seriesDatabase.showSeriesNewerThan(2011));

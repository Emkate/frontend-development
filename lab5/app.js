// var Rx = require('rxjs/Rx');

// Rx.Observable.range(0, 10)

//     // .map(item => item * 2)

//     // .filter(item => item > 10)

//     .map(item => Rx.Observable.range(0, item))

//     .switchMap()

//     .subscribe({
//         next: item => console.log(`Next item: ${item}`),
//         error: ex => console.log(`Exception: ${ex}`),
//         complete: () => console.log(`Completed`)
//     });

var q = $('#q');
var keyups = Rx.Observable.fromEvent(q, 'keyup');

keyups.throttleTime(500).map(function(x) {
    return q.val();
})

.switchMap(function(x){
    return searchWikipedia(x);
})

.do(function(x){
    console.log(x);
})

.subscribe(function(x){
    var results = "";

    if(!x[1]){
        $('#results').html("");
        return;
    }
    

    for(var i=0; i < x[1].length; i++){
        results += "<div class='search-item'>" + x[1][i] + "<br>" + x[2][i] + "<br>" + x[3][i] + "<br></div>"
    }

    if(x[1].length === 0){
        $('#results').html("No results found");
    }
    $('#results').html(results);
});

function searchWikipedia(term){
    return $.ajax({
        url: 'http://en.wikipedia.org/w/api.php',
        dataType: 'jsonp',
        data: {
            action: 'opensearch',
            format: 'json',
            search: term
        }
    }).promise();
}
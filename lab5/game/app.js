const boxWidth = 600;
const boxHeight = 400;
const directions = ['UP', 'RIGHT', 'DOWN', 'LEFT'];
var score = 0;

class Container {

    constructor (posX, posY, width, height, move, isComputer) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.move = move;
    }

    appendContainer (styles) {
        let container = this.container = $('<div></div>');
        container.css({
            width: this.width,
            height: this.height,
            position: 'absolute',
            left: this.posX - (this.width/2),
            top: this.posY - (this.height/2)
        });
        container.css(styles);
        $('body').append(container);
    }

    moveContainer (direction) {
        if(direction === 'UP'){
            this.posY -= (this.posY - this.height/2) === 0 ? 0 : this.move;
        }
        if(direction === 'RIGHT'){
            this.posX += (this.posX + this.width/2) === boxWidth ? 0 : this.move;
        }
        if(direction === 'DOWN'){
            this.posY += (this.posY + this.height/2) === boxHeight ? 0 : this.move;
        }
        if(direction === 'LEFT'){
            this.posX -= (this.posX - this.width/2) === 0 ? 0 : this.move;
        }

        $(this.container).css({
            left: this.posX - (this.width/2),
            top: this.posY - (this.height/2)
        })
    }

}

let playerContainer = new Container(200, 200, 140, 140, 10, false);
    playerContainer.appendContainer({
        'background-color' : 'transparent',
        'border' : '2px #333 solid',
        'z-index' : 1
    });

let computerContainer = new Container(80, 80, 100, 100, 10, true);
    computerContainer.appendContainer({
        'background-color' : '#167efb'
    });


$('body').css({
    'width' : boxWidth,
    'height' : boxHeight,
    'border' : '2px #333 solid',
    'position' : 'absolute',
    'left' : '100px',
    'top' : '100px'
});

function randomDirection () {
    return directions[Math.floor(Math.random() * 4)];
}

function updateScore() {
    score++;
    $('#score').find('span').text(score);
}

Rx.Observable.timer(0, 100).map(() => {
    computerContainer.moveContainer(randomDirection());

    if(
        (computerContainer.posX - (computerContainer.width/2)) >= (playerContainer.posX - (playerContainer.width/2))
    &&  (computerContainer.posX + (computerContainer.width/2)) <= (playerContainer.posX + (playerContainer.width/2))
    &&  (computerContainer.posY + (computerContainer.height/2)) <= (playerContainer.posY + (playerContainer.height/2))
    &&  (computerContainer.posY - (computerContainer.height/2)) >= (playerContainer.posY - (playerContainer.height/2))
    ){
        updateScore();
    }

}).subscribe();

Rx.Observable.fromEvent(document, 'keydown').throttleTime(100).do(() => {
    if(event.keyCode === 37){
        playerContainer.moveContainer('LEFT');
    }
    if(event.keyCode === 38){
        playerContainer.moveContainer('UP');
    }
    if(event.keyCode === 39){
        playerContainer.moveContainer('RIGHT');
    }
    if(event.keyCode === 40){
        playerContainer.moveContainer('DOWN');
    }
}).subscribe();
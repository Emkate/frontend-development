// var someObject = {};

//     console.log(someObject.toString());


function Shape(x,y){
    this.x = x;
    this.y = y;
}

Shape.prototype.message = function(){
    console.log("Hello from message");
};

Shape.prototype.getX = function () {
    return this.x;
};

Shape.prototype.getY = function () {
    return this.y;
};

Shape.prototype.move = function (deltaX, deltaY) {
    this.x += deltaX;
    this.y += deltaY;
};

var aShape = new Shape(2,1);

// console.log(aShape.toString());
// aShape.message();
// aShape.move(3,4);
// console.log(aShape.x);

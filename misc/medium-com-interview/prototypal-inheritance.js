// Make a class called 'Square' that inherits from
// 'Rectangle' and satisfies the following snippet

'use strict';

function Rectangle(width, height) {
    this.width = width;
    this.height = height;

    if (width < 3) {
        throw new RangeError("Width must be at least 5");
    }
}

Rectangle.prototype.area = function() {
    return this.width * this.height;
};

// Your code here

function Square(length) {
    Rectangle.call(this, length, length);
}
Square.prototype = new Rectangle();

// End your code

var square = new Square(4);

console.log(square.area()); // 16
console.log(Square.prototype.area === Rectangle.prototype.area); // true

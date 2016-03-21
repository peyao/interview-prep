'use strict';

// Write a function called 'partial' that makes the following snippet work.
function add(a,b) {
    return a + b;
}

function partial(func, num1) {
    return function(num2) {
        return func(num1, num2);
    };
}

var add5 = partial(add, 5);
console.log(add5(4));

// Write a function called 'shout' that accepts a string and
// a callback function, and uses 'exclaim' and 'yell' to
// transform its input.

'use strict';

function exclaim(value, fn) {
    setTimeout(function() {
        fn(value + '!');
    }, 100);
}

function yell(value, fn) {
    setTimeout(function() {
        fn(value.toUpperCase());
    }, 100);
}

// TODO
function shout(words, cb) {
    yell(words, function(yellRes) {
        exclaim(yellRes, cb);
    });
}

shout('hello', function(shouted) {
    console.log(shouted); // 'HELLO!'
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function loggerWrapper(func) {
    return function (a, b) {
        return func(a, b);
    };
}
var add = function (a, b) { return a + b; };
var loggedAdd = loggerWrapper(add);
var value = loggedAdd(3, 5);
console.log('Output:', value);

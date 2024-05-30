"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function transformKeys(user, changeKeys) {
    var transformedUser = user;
    for (var key in changeKeys) {
        var value = changeKeys[key];
        transformedUser[value] = transformedUser[key];
        delete (transformedUser[key]);
    }
    return transformedUser;
}
// generic
var user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};
var changeKeys = {
    firstName: 'first',
    lastName: 'last',
    age: 'umar'
};
var transformUser = transformKeys(user, changeKeys);
console.log(transformUser); // { first: 'Tony', last: 'Stark', age: 54 }

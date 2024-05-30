function mapObject(obj, callback) {
    var result = {};
    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            result[key] = callback(obj[key]);
        }
    }
    return result;
}
// Example usage:
var originalObject = { a: 1, b: 2, c: 3 };
var mappedObject = mapObject(originalObject, function (value) { return value.toString(); });
console.log(mappedObject); // { a: '1', b: '2', c: '3' }

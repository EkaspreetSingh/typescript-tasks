const obj1 = { a: 1, b: { c: 2 } };
const obj2 = { b: { d: 3 }, e: 4 };
const merged = deepMerge(obj1, obj2);

console.log(merged);

function deepMerge(obj1: Record<string,any>, obj2: Record<string,any>) : {} {
    for( let key in obj2 ) {
        if( obj1[key] instanceof Object && obj2[key] instanceof Object ) {
            obj1[key] = deepMerge(obj1[key], obj2[key]);
        }
        else {
            obj1[key] = obj2[key];
        }
    }

    return obj1;
}
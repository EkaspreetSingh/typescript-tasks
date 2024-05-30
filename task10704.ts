function reverseTuple(tuple1: T1) {
    return tuple1.reverse();
}

type T1 = [number, string, boolean];
const tuple1: T1 = [42, "hello", true];

const reversedTuple = reverseTuple(tuple1);
console.log(reversedTuple);

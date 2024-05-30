export {}

function loggerWrapper (func: (a: number, b: number) => number) : ((a: number, b: number) => number) {
    return (a: number, b: number) => {
        return func(a, b);
    }
}

const add = (a: number, b: number): number => a + b;
const loggedAdd = loggerWrapper(add);

const value = loggedAdd(3, 5);
console.log('Output:', value);

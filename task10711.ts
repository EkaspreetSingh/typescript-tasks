function transformKeys(user: Record<string,any>, changeKeys: Record<string,any>) {
    let transformedUser = user;

    for (let key in changeKeys) {
        const value = changeKeys[key];
        transformedUser[value] = transformedUser[key];
        delete(transformedUser[key]);
    }

    return transformedUser;
}

// generic
const user = {
    firstName: "Tony",
    lastName: "Stark",
    age: 54
};

const changeKeys = {
    firstName: 'first', 
    lastName: 'last',
    age: 'umar'
};

const transformUser = transformKeys(user, changeKeys);

console.log(transformUser); // { first: 'Tony', last: 'Stark', age: 54 }

export {};

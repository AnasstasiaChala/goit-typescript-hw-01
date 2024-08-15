function merge<T, U>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const objA = {
    name: 'Nikita',
    age: 22
};

const objB = {
    email: 'nikita@example.com',
    isActive: true
};

const merged = merge(objA, objB);
console.log(merged);
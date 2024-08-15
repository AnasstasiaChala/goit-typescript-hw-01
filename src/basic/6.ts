interface Address {
    city: string;
    county: string;
}

interface User {
    name: string;
    age: number;
    email: string;
    address?: Address;
}

const mango: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'New York',
        county: 'USA'
    }
};

const poly: User = {
    name: 'Mango',
    age: 30,
    email: 'john@example.com'
};

console.log('Mango User', mango);
console.log('Poly User', poly);
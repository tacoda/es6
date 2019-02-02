function getPerson() {
    let name = 'John';
    let age = 25;

    return {
        // property shorthand
        name,
        age,

        // method shorthand
        // es5
        // greet: function() {
        //     return 'Hello ' + this.name;
        // }

        // es6
        greet() {
            return `Hello ${this.name}`;
        }
    };

    // return { name, age };
}

console.log(getPerson().greet());

let person = {
    name: 'Karen',
    age: 32
};

// destructuring

let { name, age } = person;
console.log(name);
console.log(age);


// matches on property name: basic destructuring
let data = {
    url: '',
    status: 200,
    results: ['foo', 'bar'],
    count: 30
};

// function getData(data) {
//     let { results, count } = data;
//     console.log(results, count);
// }

// destructuring function arguments
function getData({ results, count }) {
    console.log(results, count);
}

getData(data);

function greet({ name, age }) {
    console.log(`Hello ${name}. You are ${age}.`);
}

greet(person);

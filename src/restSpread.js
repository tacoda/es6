// rest
// the rest of the numbers
function sum(...numbers) {
    return numbers.reduce((prev, curr) => prev + curr);
}

console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5));

// spread

// function sum(x, y) {
//     return x + y;
// }
//
// let nums = [1, 2];

// spread the numbers into single arguments
// console.log(sum(...nums));

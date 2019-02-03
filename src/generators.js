// function *numbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
//
// // console.log(numbers());
// let iterator = numbers();
// console.log(iterator.next());

function *range(start, end) {
  while (start <= end) {
    yield start;
    start += 1;
  }
}

// let iterator = range(1, 5);
// console.log(iterator);
//
// for (let i of iterator) console.log(i);

// You can use for-of, spread operator, or destructuring
console.log(
  [...range(1, 5)]
);

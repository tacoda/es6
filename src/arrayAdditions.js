let a = [2, 4, 6, 8, 10].includes(8);
console.log(a);
let b = [2, 4, 6, 8, 10].includes(25);
console.log(b);

let c = [2, 4, 6, 8, 10].find(function(item) {
  // return item === 8;
  return item >= 5;
});
console.log(c);

console.log(
  [2, 4, 6, 8, 10].find(item => item > 8)
);

console.log(
  [2, 4, 6, 8, 10].findIndex(item => item > 8)
);

// var name = 'joe';
// let name2 = 'joe';
// const name3 = 'joe';

// let and const are block-level scope
// var is function-level scope (hoisting)

// use var when you have a good use-case
// use let when you normally would've used var before

// Strategy 1:
// default to using const
// if you need to re-assign it, use let
// never use var

// Strategy 2:
// only use var at the top level
// default to using let
// use const when you don't want re-assignment

// Force immutability with
// const months = Object.freeze([...]);
// Or use underscore or lodash

// function fire(bool) {
//     if (bool) {
//         var foo = 'bar';
//         console.log(foo);
//     } else {
//         console.log(foo);
//     }
// }
//
// fire(true);
// fire(false);

// function fire(bool) {
//     if (bool) {
//         let foo = 'bar';
//         console.log(foo);
//     } else {
//         console.log(foo);
//     }
// }
//
// fire(true);
// fire(false);

// constant, but not immutable
// const names = ['John', 'Sandy'];
// you cannot re-assign the const
// names = ['Frank', 'Susan'];

// but you can alter it
// names.push('Susan');
// console.log(names);

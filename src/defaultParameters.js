// function applyDiscount(cost, discount) {
//     discount = discount || .10;
//     return cost - (cost * discount);
// }

// function applyDiscount(cost, discount = .10) {
//     return cost - (cost * discount);
// }

// you can invoke functions as default parameters!

function defaultDiscountRate() {
    return .10;
}

function applyDiscount(cost, discount = defaultDiscountRate()) {
    return cost - (cost * discount);
}

console.log(applyDiscount(100, .40));
console.log(applyDiscount(100));

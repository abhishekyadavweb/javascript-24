const score = 400
// console.log(score);

const balance = new Number (100) 
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(3));

const otherNumber = 123.896
// console.log(otherNumber.toPrecision(4));


const hundred = 100000000
// console.log(hundred.toLocaleString('en-IN'));



// +++++++++++++++++Maths++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.round(4.7));
// console.log(Math.ceil(4.7));
// console.log(Math.floor(4.7));
// console.log(Math.min(1, 3, 7, 9));
// console.log(Math.max(1, 3, 7, 9));

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min);
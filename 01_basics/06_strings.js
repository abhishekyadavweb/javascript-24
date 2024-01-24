const name = "abhi"
const repoCount = 50

// console.log(name + repoCount + " value");

console.log(`my name is ${name} and my repocount is ${50}`);

const gameName = new String ("abhi-hc-com")
// console.log(gameName[0]);
// console.log(gameName[3]);
// console.log(gameName[1]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt('2')); // for position
console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0, 5)
// console.log(newString);

// const anotherString = gameName.slice(-6, 5)  // reverse value
// console.log(anotherString);

const newStringOne = "    abhi   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://abhi.com/abhi%20yadav"
console.log(url);
console.log(url.replace('%20', '-'));

console.log(url.includes('abhi'));
console.log(url.includes('aman'));

console.log(gameName.split('-'));
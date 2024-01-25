const marvelHeros = ["Ironman", "Thor", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros);
// console.log(marvelHeros[2]);
// console.log(marvelHeros[3]);
// console.log(marvelHeros[3][1]);

// const myHero = marvelHeros.concat(dcHeros)
// console.log(myHero);

const myNewHero = [...marvelHeros, ...dcHeros]
// console.log(myNewHero);

const anotherArray = [1, 2, 3, [2, 3, 4], 6, 5,[1, 2, [8,9]]]
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("abhi"));
console.log(Array.from("abhi"));
console.log(Array.from({name : "abhi"})); //intresting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3))
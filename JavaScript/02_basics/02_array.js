const marvel_heros = ['thor', 'Ironman', 'Hulk', 'Black Widow', 'Captain America'];
const dc_heros = ['Batman', 'Superman', 'Wonder'];

// marvel_heros.push(dc_heros); // Adds the entire dc_heros array as a single element

// console.log(marvel_heros); // ['thor', 'Ironman', 'Hulk', 'Black Widow', 'Captain America', ['Batman', 'Superman', 'Wonder']]
// console.log(marvel_heros[5][1]); // Accesses the second element of the nested array, which is 'Superman'



// const allHeros = marvel_heros.concat(dc_heros); // Combines marvel_heros and dc_heros into a new array
// console.log(allHeros); // ['thor', 'Ironman', 'Hulk', 'Black Widow', 'Captain America', 'Batman', 'Superman', 'Wonder']

const all_new_heros = [...marvel_heros, ...dc_heros]; // Using spread operator to combine arrays
// console.log(all_new_heros); // ['thor', 'Ironman', 'Hulk

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const real_another_array = another_array.flat(Infinity); // Flattens the array to a depth of all arrays
// console.log(real_another_array); // [1, 2, 3,


console.log(Array.isArray("kaushinder")); // false, checks if the value is an array
console.log(Array.from("kaushinder")); // Converts a string to an array of characters ['k', 'a', 'u', 's', 'h', 'i', 'n', 'd', 'e', 'r']
console.log(Array.from({name: "kaushinder"})); // Converts an object to an array with a single element: [{name: "kaushinder"}]


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3)); // Creates a new array with the given elements [100, 200, 300]

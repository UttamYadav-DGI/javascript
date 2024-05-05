const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["superman","flash","batman"]

marvel_heros.push(dc_heros);//it is value of next index
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); op["superman","flash","batman"] 1idx===flash
// marvel_heros.concat(dc_heros) //make a new array
// console.log(marvel_heros);

// const allheros=marvel_heros.concat(dc_heros)
// console.log(allheros);

// const all_new_heros=[...marvel_heros,...dc_heros]
// console.log(all_new_heros);

const another_array=[1,2,3, [4,5,6],7,8, [9,5, [0,100]]]
const real_anotherArray=another_array.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("hitesh")) //check krega array m h y nhi
console.log(Array.from("hitesh")) //convert into array

console.log(Array.from({name:"hitesh"}))//intersting  giving op empty array []

let score1=100;
let score2=200;
let score3=300;
console.log(Array.of(score1,score2,score3));
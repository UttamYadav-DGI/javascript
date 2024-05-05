//array
const arr=[0,1,2,3,4,5]
const arr2=["shakitman","uttam"]

const brr=new Array(1,2,3,4)
//console.log(brr[0]);

//array methods
// arr.push(6);
// console.log(arr);
// arr.pop();//remove of element
// console.log(arr);
// arr.unshift(9);
// console.log(arr);
// arr.shift()
// console.log(arr);// shift operaton first ele ko shift kredeta hai mtlb delete
// console.log(arr.includes(9));
// console.log(arr.indexOf(2));// they get the value of index 2nd
// console.log(arr);

const newArr=arr.join() // covert into string

console.log(arr);
console.log(typeof newArr);

// slice and splice
console.log("A",arr);
const myn1=arr.slice(0,3);
console.log(myn1);
console.log("A",arr);

//splice
console.log("b",arr);
const myn2=arr.splice(0,3);// print including 0 or 3 both but this is affect the original arrray
console.log(myn2);
console.log("b",arr);


//dates
let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(typeof myDate); // date is object like class

// let myCreatedDate=new Date(2023,0,23) //in javascript months is starts in 0-january
// console.log(myCreatedDate.toDateString());

let myCreatedDate=new Date("2023-01-04")//yy/mm/dd
console.log(myCreatedDate.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth()); //y months btayega 
console.log(newDate.getDate());
let a=5
if(true){
let a=10
const b=20
var c=30
}
//console.log(a); //not print outof scope
// console.log(b); not print out of scope
//console.log(c); // but the var is print 30

function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
    two();
}
one();

//+++++++++++++++++++++++++++++++++intersting++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
 console.log(addone(5));
function addone(num){
    return num+1;
}
// addone(5);
 
//console.log(addTwo(4)); // give errror becasuse it store into variables
const addTwo=function(num){
    return num+2;
}

console.log(addTwo(3));

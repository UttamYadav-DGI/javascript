function sayMyName(){
    console.log("h");
    console.log("i");
    console.log("t");
    console.log("e");
    console.log("s");
    console.log("h");
}
//sayMyName();

// function addTwoNumber(number1,number2){
//      console.log(number1+number2);
// }


//const result=addTwoNumber(3,5); //into int 8
// console.log(("result:",result)); // op-undefind because function does not return anyrhing
// addTwoNumber(3,"5") //it convert both number in stirng

function addTwoNumber(number1,number2){
    let result=number1+number2;
    return result;
}
const result=addTwoNumber(3,5)
//console.log(("result: ",result));

function loginUserMessage(username){
   if(username==undefined){
    console.log("please enter a username");
    return;
   }
    return `${username} just logged in`
}
// console.log(loginUserMessage(""));   //undefined  
// console.log(loginUserMessage("hitesh")); 



///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// function calulateCartPrice(...num1){//rest operator
//     return num1;
// }
// console.log(calulateCartPrice(200,400,500,1000))

// function calulateCartPrice(val1,val2,...num1){//rest operator
//     return num1;

// }

// console.log(calulateCartPrice(200,400,500,1000))

const user={
    username:"hitesh",
    prices:199
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.prices}`)
}

handleObject(user)//object pass kiya hai

const myNewArray=[200,400,100,600]

function returnSecondValue(anyArray){
    return anyArray[1];
}

console.log(returnSecondValue(myNewArray));
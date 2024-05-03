const score=400;
//console.log(score);

const balanced=new Number(100)
// console.log(balanced);
// console.log(balanced.toString().length);
// console.log(balanced.toFixed(2));//decimal k baad 

const othernum=1203.8966
// console.log(othernum.toPrecision(4));
// console.log(othernum.toLocaleString('en-IN'));
//+++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-4));//absoloute value
console.log(Math.round(4.4));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));//lowest value
console.log(Math.min(4,1,3,6));
console.log(Math.max(4,3,0,2,9));

console.log(Math.random());//random value between 0 and 1
console.log((Math.random()*10)+1); // isme 1. to 9.0 something tk value a skti hai

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);// isme hame 10 to 20 k bich m koi s bhi no chaiye to humne (max-min+1) ko use kiya ) +min) ko isliye add kiya jisse minimum value 10 s badi hoo
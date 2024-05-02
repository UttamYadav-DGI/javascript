const name="hitesh"
const repocount=50

//console.log(name+repocount+"value");
console.log(`hello my name is ${name} and my repo count is ${repocount}`);
                             // $()                       $()
const gameName=new String(`hiteshhc`)
console.log(gameName[0]);
console.log(gameName._proto_);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4) // 4 ko include nhi kiya hai  op-hite
console.log(newString);
const anotherString=gameName.slice(-8,4)
console.log(anotherString);

const newStringOne="  hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());//without space print string

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))

console.log(url.includes('hitesh'))/// hamare url m hitesh hai y nhi 
console.log(url.includes('sundar')) //false
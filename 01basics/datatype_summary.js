//primitive
// 7 types: String,number,boolean,null,undefined,Symbol,Big int
const score=100;
const scoreval=100.02;
const isLoggedIn=false;
const outsideTemp=null;
let userName;// undefined
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

//reference (non-primitive)
//array,objects,function

//*********************************************************************** */

//stack(primitive)  , heap(non-primitive)
let myyoutubeName="utttamyadav@gmail.com";
let anothername=myyoutubeName
anothername="chaiaurcode"

console.log(myyoutubeName);
console.log(anothername);

let user={
    email: "user@google.com",
    upi: "up@ybi",
}
let userTwo=user
userTwo.email="hitesh@gog.com",
console.log(user.email);
console.log(userTwo.email);



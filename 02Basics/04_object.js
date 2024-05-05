//const tinderuser=new object()
const tinderuser={}
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isLoggedIn=false

//console.log(tinderuser);

const regularUser={
    email:"sammy@gmai.com",
    fullname:{
        userfullname:{
            firstName:"hitesh",
            lastname:"choudhary"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstName)

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

//const obj3={obj1,obj2} y object kk ander obj ko print krayega
//const obj3=Object.assign({},obj1,obj2)

//console.log(obj3)

const obj3={...obj1,...obj2}//most used syntax  // spriding technique
// console.log(obj3);

// console.log(tinderuser);
// console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ]  in array m change kr diya gya 
// console.log(Object.values(tinderuser));

// console.log(tinderuser.hasOwnProperty('isLoggedIn')) // y property hai y nhi output -true
// console.log(tinderuser.hasOwnProperty('isLogged') )// op-false;

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"hitesh"
}
//course.courseinstructor

const {courseInstructor:instructor}=course //courseinstructor ko hum instructor s bhi access kr skte hai
//console.log(courseInstructor);
console.log(instructor);

//object literals
const mySym=Symbol("key1")

const jsUser={
    name:"Hitesh",
    "full name":"Hitesh choudhary",
    [mySym]:"key1",//imp interview ques hai symbol bno obj m use krke dikao
    age:18,
    location:"jaipur",
    email:"hitesh@google.com",
    isLoggedIn:false,
}
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser["full name"])
console.log(jsUser[mySym])

jsUser.email="hitesh@chppt.com"
//Object.freeze(jsUser)//after this no change occur
jsUser.email="hitesh@micro.com"
console.log(jsUser);

jsUser.greeting=function(){
    console.log("HEllo js user");
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,$(this.name)`);
}
console.log(jsUser.greeting());
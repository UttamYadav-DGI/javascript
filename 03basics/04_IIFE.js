// immediately invoked function expression(IIFE)

(function chai(){
    console.log(`DB CONNECTED`);
})();

( ()=> {
    console.log(`DB is connected`);
})();

( (name)=> {
    console.log(`DB is connected ${name}`);
})('hitesh')
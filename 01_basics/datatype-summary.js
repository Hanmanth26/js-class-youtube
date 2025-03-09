// Primitive

//7 catagerioes
//7 type : string, Number, Boolean, null, undefined, Symbol,BigInt

const score = 100
const scoreValue = 100.3
const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 356324589648522459555454564687n



// Reference (Non primitive)
// Array, Objects,Functions

const heros = ["shaktiman","naagraj","doga"];
let myObj = {
    name:"ajay",
    age:22,
}

const myFunction = function(){
    console.log("Hello world")
}

// console.log(typeof  bigNumber);
// console.log(typeof  outsideTemp);

console.log(typeof myFunction);
console.log(typeof  heros);

console.log(typeof  anotherId);

// https://262.ecma-international.org/5.1/#11.4.3

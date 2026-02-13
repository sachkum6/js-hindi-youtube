//  Primitive ( call by value)

//  7 types : String, Number, Boolearn, null( empty, ekdam khali, it's not zero), undefined, Symbol, BigInt
// for null remember the example of temperature, for ex. server sends the temperature as 0 //897u879uibut we convert it into a null because 0 is not a temperature so the null will be empty
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive) , call by Reference

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
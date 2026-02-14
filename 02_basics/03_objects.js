// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Hitesh", //keys are always string type
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // Symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // dot notation
// console.log(JsUser["email"]) // square notation
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting); // [Function (anonymous)], function is not exectued, it gave the reference of the function
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

/*
if we create objects with constructor then it's singleton, apne tarah ka ek hi object hai
constructors - singleton
literals - not singleton

Most of the time we use dot notation
*/
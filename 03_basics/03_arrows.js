const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
//user.username = "sam"
 // user.welcomeMessage()

//console.log(this); // it is the node context which is empty, if you run the same command in Browser you will get Windows object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }


// const chai =  () => {
//     let username = "hitesh"
//     console.log(this.username);
// }


// chai()

// () => {}
// const testFn = () => {} // you can assign a function to a variable

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// if you are using curly braces that's an explicit returm, if you're using return you need to use curly braces.

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return, only single statement

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return, here you are using round parentheses and not curly parentheses.

// const addTwo = (num1, num2) => {username: "hitesh"} // undefined
// const addTwo = (num1, num2) => ({username: "hitesh"}) // this will return { username: 'hitesh' }, that's why you wrap an object inside the parentheses.


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
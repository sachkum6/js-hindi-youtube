// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4) // this is also one of the syntax to declare array, notice we used parentheses ( round brackets), and in the line# 3 we used square brackets.
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3)); // if the value does not exist it will always give -1, you can try with 19

// const newArr = myArr.join() // combine elements and convert your array into string.

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // it manipulates your original array result [0,4,5]
console.log("C ", myArr);
console.log(myn2);
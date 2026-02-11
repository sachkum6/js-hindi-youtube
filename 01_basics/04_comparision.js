// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0); // false
console.log(null == 0); // true
console.log(null >= 0); // true

/*
The reason is that an equality check == and comparions > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >=0 and (1) null > 0 is false.
*/

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

// === Strict Check - it checks the data type also and doesn't convert the data type

console.log("2" === 2);


const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (value, key){
//     console.log(`Key : ${key} , Value : ${value}`);
// } )

// coding.forEach( (value, key) => {
//     console.log(`Key : ${key} , Value : ${value}`);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

//coding.forEach(printMe)

// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )
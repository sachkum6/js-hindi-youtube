const accountId = 144553 // constant
let accountEmail = "sachin@google.account"
var accountPassword = "12345" // scope problem
accountCity = "Jaipur" //it will work, but not the preferred way
let accountState; //undefined

//accountId = 2 // Not allowed - TypeError: Assignment to constant variable.

accountEmail = "hc@hc.com"
accountPassword ="212121"
accountCity = "Bengaluru"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var 
because of issue in block scope and functional scope ( we will talk about this in details later)
*/

// semi colon is optional in javascript

/*
(index) │   Values    │
├─────────┼─────────────┤
│    0    │   144553    │
│    1    │ 'hc@hc.com' │
│    2    │  '212121'   │
│    3    │ 'Bengaluru' │
│    4    │  undefined

*/
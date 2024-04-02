const accountId = 144553
let accountEmail = "sahil@gmail.com"
var accountPassword = "12345"
accountCity = "JAIPUR"
let accountState ;

// accountId = 2 
console.log(accountId);

/* 
Don't use var 
because it has issues with block scope and functional scope
*/
console.table({accountId,accountEmail,accountPassword,accountCity,accountState})
// Bydefault value of any unassigned variable is undefined
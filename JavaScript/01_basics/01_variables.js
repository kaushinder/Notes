const accountId = 144553;
let accountEmail = "kaushindersinghraghav@gmail.com";
var accountPassword = "12345";
accountCity = "NEW DELHI";

// accountId = 2;   // NOt allowed

accountEmail = "ksr@ks.com";
accountPassword = "13456";
accountCity = "DELHI";
let accounState;

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accounState]);

// prefer not to use var bcz of issue in block scope and functional scope.
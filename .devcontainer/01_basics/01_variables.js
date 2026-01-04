const accountId = 123456
let accountEmail = "coolboy@gmail.com"
let accountPassword = "06072001"
let accountCity = "vatican"
let accountState;

// accountId = 2 // ------ not allowed

accountEmail = "notsocoolboy@gamil.com"
accountPassword = "06072020"
accountCity = "patna"

// use 'let' instead of 'var' to declear variable since var is used to maintain old code and not to use in modern JS and it can cause issues.  

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
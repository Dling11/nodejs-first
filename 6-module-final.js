//Commonjs - very file is module (by default)
//modules => encapsulated code (only share minimum)


// ======> 2-names
// incase you forgot => "require" - function to use modules (commonJs)
const names = require('./2-names'); //==> check at > 2-names > it is set to > module.exports
console.log(names)


// ======> 3-utils
const allGreetings = require('./3-utils'); //check in 3-utils => remember that the module.exports => can be used
// module.exports => is similar to => export defailt in React

allGreetings(`Madafa-k`) 
allGreetings(names.person1) //==> in order the access we need to access it like an object
allGreetings(names.person2) //==> person 1 > Ling ==== person 2 > Ding


// ======> 4-alternative-exports
const uncleBobie = require('./4-alternative-exports') //==> you got the point about it
console.log(uncleBobie) //console => the object & array refer to 4-alternat....

//==> but to be honest alternative-4 , is much better than 2-names => because alternative 4 uses => object and array > mannerly

//=================================== Mind Grenade
//==> not that big deal, but to showcase we can, use that component to use it in here => app.js
require('./5-mind-grenade')
                   
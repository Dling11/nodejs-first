const readFileSync2 = require('fs') //==> disame process

console.log(start)
//readFileSync =======> SYNC 
const { readFileSync, writeFileSync } = require('fs'); //==>destructured

const first = readFileSync('./content/first.txt', 'utf8'); //take note even you don't input utf8 it is already a default
const second = readFileSync('./content/second.txt', 'utf8');

console.log(`${first} | ${second}`)

//writeFileSync =======> SYNC 
writeFileSync( //======> The idea of this is that it will create a file inside the content => `Here is the result : ${first}, ${second}`
   './content/result-sync.txt',                              //=====> also if the file already exist it will override all the same file
   `Here is the result Rowell : ${first}, ${second}`,
   { flag: 'a' } //===> the { flag: 'a' } ==> will execute to code
)  //========> upon executing => node app.js in terminal it will create or override if file is already exist
console.log(`done with this task`)
console.log(`starting the next one`)
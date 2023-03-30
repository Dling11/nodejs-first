const { readFile, writeFile } = require('fs');

console.log(`start`)
readFile('./content/first.txt', 'utf8', (err, result) => { //===> if you observe quite similar to asyncronous
   if(err) {                   //===> again utf-8 is a default => input it to be safe
      console.log(`is the error: ${err}`)
      return;
   }
   // console.log(`is the result: ${result}`)
   const first = result;  //===> The result is the first.txt

//=====> readFile
   readFile('./content/second.txt','utf8', (err, result) => {
      if(err) {
         console.log(`is the error: ${err}`)
         return;
      }
      const second = result; //===> The result is the second.txt

//=====> WriteFile
      writeFile(     //===> take note that > WriteFile is inside the Readfile 
         './content/result-async.txt',  //====> using writeFile will create or override files
         `Here is the result Rowell the king : ${first}, ${second}`, (err, result => {
            if(err) {
               console.log(`This is the error of the writeFile: ${err}`);
               return;
            }
            // console.log(result)
            console.log(`done with this task`)
         })
      )
   })
})
console.log(`starting next task`)

//================> LMAO THIS IS A CALLBACK HELL

//=======> also if you look carefully at 10-fs-sync it has the same outcome, but 10 doesn't have error handling
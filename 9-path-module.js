const path = require('path');

console.log(path.sep) //create ==> "/"

// path.join
const filePath = path.join('./content','subfolder','test.txt'); //==> means create and join subpath => ex."1-a-content\subfolder\test.txt"
console.log(filePath)

// path.basename
const base = path.basename(filePath); //==> will only return => test.txt or return last or base
console.log(base)

//path.resolve
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt'); //==> __dirname or directory file
console.log(absolute)
//npm - global command, comes with node
//npm --version

//local dependency => use it only in this particular project
//npm i <packageName>

//global dependency => use it in any project
//npm install -g <packageName>

//sudo npm install -g <packageName>  ==> only in (mac)

//package.json => manifest file (stores important info about project/package) manual approach (create package.json in the root, create properties etc.)

//npm init (step by step, press Enter to skip )
//npm init -y (everything default) //=====> if you want to automatically yes all

//===============> npm i lodash  //==> just an example

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItem = _.flattenDeep(items);
console.log(newItem)
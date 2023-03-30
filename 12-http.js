//Http
const http = require('http');

                                    //===> The first the parameter => "req" is the incomming request
const server = http.createServer((req, res) => { //=======>  res means second parameter ==> response

   if(req.url === '/') {  //========> always remember that "/" this means home
      res.end('Welcome to my Homepage')
   }
   if(req.url === '/about') {
      res.end('<h1> About Me </h1> <p> Ding is the coolest by Ling </p>')
   }
   res.end(`
      <h1>Opps!</h1>
      <p> We can't seem to find the page you are looking for from God Rowell</p>
      <a href="/"> Return Home </a>
   `) //====> if search mistake url, it will show this
})

server.listen(5000)  //if we execute  => node app.js => then go to http://localhost:5000/ it will execute this












//the first
// const http = require('http');

//                                     //===> The first the parameter => "req" is the incomming request
// const server = http.createServer((req, res) => { //=======>  res means second parameter ==> response

//    console.log(req)
//    res.write('Welcome to our home page ROWELL JAY');   //=====> http://localhost:5000/ it will execute this
//    res.end()  //====> end() means ending the request
   
// })

// server.listen(5000)  //if we execute  => node app.js => then go to http://localhost:5000/ it will execute this
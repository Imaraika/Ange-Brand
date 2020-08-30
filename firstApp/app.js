// function sayHello(name){
//     console.log('Hello ' + name);
// }
// sayHello('Ange');
// console.log(window);
// var sayHello = function(){

// }
// window.sayHello();

// console.log(module);
// const log = require('./logger');
// console.log(logger);
//calling the object
// log.log =('message');
// log('message');

// const path = require('path');
// var pathObj = path.parse(__filename);
// console.log(path)

//  const os = require('os');
//  var totalMemory = os.totalmem();
//  var freeMemory = os.freemem();

// //  console.log('Total Memory' + totalMemory);

//  //Template string 
//  // ES6/ Es2015 
// // Ecma
//  console.log(`Total Memory: ${totalMemory}`);
//  console.log(`Total Memory: ${freeMemory}`);

// const fs = require('fs');
// const files = fs.readdirSync('./');
// console.log(files)

// fs.readdir('$', function(err, files){
//     if (err) console.log('error',err);
//     else console.log('result', files)
// })


// const EventEmmiter = require('events');

// // const emmiter = new EventEmmiter();

// const Logger = require('./logger');
// const logger = new Logger();
// //register a listener
// logger.on('messageLogged',(arg) => {
//     console.log('lissen called', arg)
// });
// logger.log('message');
const htttp = require('http');
const server = htttp.createServer((req, res)=> {
    if (req.url ==='/'){
        res.write('Hello World')
        res.end();
    }

    if (req.url ==='/api/courses') {
        res.write(JSON.stringify([1, 2, 3]));
        res.end();
    }
});

server.listen(3000);

console.log('Listening on port 3000...');
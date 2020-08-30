const EventEmmiter = require('events');

// const emmiter = new EventEmmiter();
var url = 'http:/mylogger.io/log';

class Logger extends EventEmmiter{
    log(message)
     {
        //send http Request
    
    console.log(message);
    //Raise the Event
    this.emit('messageLogged', {id:1, url: 'http://'});
    
    }
}

// module.exports.log = log;

 module.exports = Logger;

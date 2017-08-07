var dirArg = '';
process.argv.forEach((val, index) => { if(index == 2){ dirArg = val; } });

var Server = require('./startServer');
var theseArgs = require('./nh_node/args')(process.argv);

console.log(theseArgs);

var Server = require('./nh_node/startServer');

var io = require('socket.io')(Server.http);
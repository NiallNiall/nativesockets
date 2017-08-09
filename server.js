// Pass the arguments to a module
var version = require('./nh_node/args')(process.argv);
// Test Comeback
console.log('Starting version: ' + version);

var Server = require('./nh_node/startServer');
//Start the server with the the root dir and arguments
Server.init(__dirname, version);

var io = require('socket.io')(Server.http);


var Midi = require('./nh_node/midi');
// This could probably be rewritten
Midi.sendIo(io);
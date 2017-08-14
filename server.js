// Pass the arguments to a module
var version = require('./nh_node/args')(process.argv);
// Test Comeback
console.log('Starting version: ' + version.name);

var Server = require('./nh_node/startServer');
//Start the server with the the root dir and arguments
Server.init(__dirname, version.folder);

var io = require('socket.io')(Server.http);

// Loads a different node file depending on the arguement
var Midi = require('./nh_node/' + version.midi)(io);

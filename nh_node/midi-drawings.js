// Load Helpers
var helpers = require('./helper');
// Load Midi
var easymidi = require('easymidi');
// Make a new Port and name it
var input = new easymidi.Input('Phonode Midi', true);

function reMapBeatPhase(bPhase){
        var reVal = 0;
        var valInst = bPhase;
        // Weird mapping to resync the beat phase
        if(valInst < 64) {reVal = 64 + valInst;} else {reVal = -64 + valInst;}
        var thisVal = helpers.jsClamp(Math.floor(helpers.jsMap(reVal, 0, 50 , 255, 0)), 0, 255);

        return thisVal;
}


module.exports = function(io) {
    // console.log(io);

    var clients = [];

    // =================================================

    input.on('pitch', function(msg) {
        // console.log(msg);
        if (msg.channel == 0) {
            // console.log('videoAPI:' + msg.value);
        }
        if (msg.channel == 10) {

            var thisVal = reMapBeatPhase(msg.value);
            io.emit('liveBeat', { 'clr': thisVal });
        }
    });

    // =================================================

    io.of("/new").on('connection', function(socket) {

        console.log('A New Connection! ' + socket.id)

        var rndClr = helpers.randomClr();

        var thisClient = {
            "name": socket.id,
            "id": socket.id,
            "x": 100,
            "y": 100,
            "index": clients.length,
            "color": rndClr,
            "cWidth": 200,
            "cHeight": 200
        }

        clients.push(thisClient);

        // =================================================

        socket.on('disconnect', function() {
            console.log(socket.id + ' disconnected!');

            console.log(clients.indexOf(socket));

            console.log(thisClient.index);
            clients.splice(thisClient.index, 1);

            io.emit('clientsFromNode', clients);

        });

        // =================================================

        socket.on('fromCli', function(data) {
            console.log(data);
            txt.push(data);
        });

        // =================================================

        socket.on('mouseFromCli', function(data) {
            // console.log(socket.id + ': ' + data);
            // console.log(clients);
            thisClient.x = data.x;
            thisClient.y = data.y;
            thisClient.name = data.name;
            thisClient.cWidth = data.cWidth;
            thisClient.cHeight = data.cHeight;
            // txt.push(data);
            io.emit('mouseFromNode', data);
            io.emit('clientsFromNode', clients);
        });

        // =================================================

    });

}


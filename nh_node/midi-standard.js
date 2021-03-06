// Load Helpers
var helpers = require('./helper');
// Load the Easy midi Stuff
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

    input.on('pitch', function(msg) {
        if (msg.channel == 10) {

            var thisVal = reMapBeatPhase(msg.value);

            io.emit('liveBeat', {'clr': thisVal});
        }
    });


}
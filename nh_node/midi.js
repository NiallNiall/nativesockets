// Load Helpers
var helpers = require('./helper');
// Load the Easy midi Stuff
var easymidi = require('easymidi');
// Make a new Port and name it
var input = new easymidi.Input('Phonode Midi', true);

var textr = require('./helper-text');

var io = {};

var behav = require('./renamethis');
behav.init('aa');


function reMapBeatPhase(bPhase){
        var reVal = 0;
        var valInst = bPhase;
        // Weird mapping to resync the beat phase
        if(valInst < 64) {reVal = 64 + valInst;} else {reVal = -64 + valInst;}
        var thisVal = helpers.jsClamp(Math.floor(helpers.jsMap(reVal, 0, 50 , 255, 0)), 0, 255);

        return thisVal;
}


input.on('pitch', function(msg) {
    // console.log(msg);
    if (msg.channel == 0) {
        // console.log('videoAPI:' + msg.value);
    }
    if (msg.channel == 10) {

        var thisVal = reMapBeatPhase(msg.value);

        if(msg.value > 120){
            textr.setAvail(true);
        } else {
            textr.setAvail(false);
        }
      
        io.emit('liveBeat', {'clr': thisVal});
    }
});


// Server stuff
module.exports = {
    sendIo: function(thisIo){
        // console.log(thisIo);
        io = thisIo;
        textr.setIo(thisIo);
    }
}
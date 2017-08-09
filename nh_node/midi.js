// Load Helpers
var helpers = require('./helper');
// Load the Easy midi Stuff
var easymidi = require('easymidi');
// Make a new Port and name it
var input = new easymidi.Input('Phonode Midi', true);

var io = {};

input.on('pitch', function(msg) {
    // console.log(msg);
    if (msg.channel == 0) {
        // console.log('videoAPI:' + msg.value);
    }
    if (msg.channel == 10) {
        console.log(msg.value);
        // moveText();
        // if(msg.value > 120){
        //     setAvail(true);
        // } else {
        //     setAvail(false);
        // }
       var reVal = 0;
        var valInst = msg.value;
        // Weird mapping to resync the beat phase
        if(valInst < 64) {reVal = 64 + valInst;} else {reVal = -64 + valInst;}

        var thisVal = helpers.jsClamp(Math.floor(helpers.jsMap(reVal, 0, 50 , 255, 0)), 0, 255);
        io.emit('liveBeat', {'clr': thisVal});
    }
});


// Server stuff
module.exports = {
    sendIo: function(thisIo){
        // console.log(thisIo);
        io = thisIo;
    }
}
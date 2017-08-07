var dirArg = '';
var thisDir = 'drawings';
// print process.argv
process.argv.forEach((val, index) => {
  // console.log(`${index}: ${val}`);

  if(index == 2){
    dirArg = val;
  }

});

// console.log(dirArg);

switch(dirArg) {
    case 'drawings':
        thisDir = 'drawings';
        console.log('drawings');
        break;
    case 'words':
        thisDir = 'words';
        console.log('words');
        break;
    default:
        thisDir = 'drawings';
        console.log('drawings');
}



var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Load the Easy midi Stuff
var easymidi = require('easymidi');
// Make a new Port and name it
var input = new easymidi.Input('Phonode Midi', true);


//Start the server
app.use(express.static(__dirname + '/public/' + thisDir));

var port = 3000;
http.listen(port, function() {
    console.log('Server running on port ' + port);
});

var txtNum = 0;
var txt = ['boop', 'tszh'];

// Set Availability Boolean
var available = true;
// Create a copy to store previous state
var oldAvailable = available;

var thisNum = 0;

function moveText(){
     if(txtNum < txt.length-1){
        txtNum += 1;
    } else {
        txtNum = 0;
    }

    io.emit('myFunc', {'txt': txt[txtNum]});
}

function randomClr(){
    var R = Math.floor(Math.random() * 250) + 10;
    var G = Math.floor(Math.random() * 250) + 10;
    var B = Math.floor(Math.random() * 250) + 10;

    var outputClr = 'rgb(' + R + ', ' + G + ', ' + B + ')';
    return outputClr;

}


function setAvail(availBit) {
     available = availBit;
     if (oldAvailable == available) {
         // do nothing
     } else {
         if (!available) {
             console.log("");
             // triggerEvent();
         } else {
             console.log("Beat Beat Beat!");
             // txtNum+=1;
             moveText();
         }
     }
     oldAvailable = available;
 }

// Initiliase a function to make maps
function jsMap(val, A, B, a, b) {
    var mapd = (val - A) * (b - a) / (B - A) + a
    return mapd;
}

function jsClamp(num, min, max) {
  return num <= min ? min : num >= max ? max : num;
}

input.on('pitch', function(msg) {
    // console.log(msg);
    if (msg.channel == 0) {
        // console.log('videoAPI:' + msg.value);
    }
    if (msg.channel == 10) {
        // console.log(msg.value);
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

        var thisVal = jsClamp(Math.floor(jsMap(reVal, 0, 50 , 255, 0)), 0, 255);
        io.emit('liveBeat', {'clr': thisVal});
    }
});


var clients = [];

// Execute when a connection is made
io.of("/new").on('connection', function(socket) {

    console.log('A New Connection! ' + socket.id)

    var thisID = socket.id;

    var rndClr = randomClr();

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


    socket.on('disconnect', function() {
      console.log(socket.id + ' disconnected!');

    console.log(clients.indexOf(socket));

    console.log(thisClient.index);
    clients.splice(thisClient.index, 1);

    io.emit('clientsFromNode', clients);

   });

    socket.on('fromCli', function(data) {
        console.log(data);
        txt.push(data);
    });

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

});
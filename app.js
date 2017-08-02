var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

// Load the Easy midi Stuff
var easymidi = require('easymidi');
// Make a new Port and name it
var input = new easymidi.Input('Phonode Midi', true);


//Start the server
// var thisDir = 'words';
var thisDir = 'drawings';
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


input.on('pitch', function(msg) {
    // console.log(msg);
    if (msg.channel == 0) {
        // console.log('videoAPI:' + msg.value);
    }
    if (msg.channel == 10) {
        // console.log(msg.value);
        // moveText();
        if(msg.value > 120){
            setAvail(true);
        } else {
            setAvail(false);
        }
    }
});


var clients = [];

// Execute when a connection is made
io.on('connection', function(socket) {

    console.log('A New Connection! ' + socket.id)

    var thisID = socket.id;

    var rndClr = randomClr();

    var thisClient = {
        "name": socket.id,
        "id": socket.id,
        "x": 100,
        "y": 100,
        "index": clients.length,
        "color": rndClr
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
        // txt.push(data);
        io.emit('mouseFromNode', data);
        io.emit('clientsFromNode', clients);
    });

});
var express = require('express');
var app = express();
var http = require('http').Server(app);

//Start the server
app.use(express.static(__dirname + '/public/'));

var port = 3000;
http.listen(port, function() {
    console.log('Server running on port ' + port);
});

// Server stuff
module.exports = {
	http: http
}
var express = require('express');
var app = express();
var http = require('http').Server(app);



// Server stuff
module.exports = {
	http: http,
	init: function(rootdir, args){
		//Start the server with the the root dir and arguments
		app.use(express.static(rootdir + '/public/' + args));

		var port = 3000;
		http.listen(port, function() {
		    console.log('Server running on port ' + port);
		});
	}
}


function Textr() {
    this.txtNum = 0;
	this.txt = ['boop', 'tszh'];
	// Set Availability Boolean
	this.available = true;
	// Create a copy to store previous state
	this.oldAvailable = available;
}

// This is from some cpy pasted code
Textr.prototype.isAuthenticated = function() {
    return(this.authStatus && this.email && this.displayName)
}

Textr.prototype.moveText = function(){
     if(this.txtNum < txt.length-1){
        this.txtNum += 1;
    } else {
        this.txtNum = 0;
    }
    io.emit('myFunc', {'txt': this.txt[this.txtNum]});
}

Textr.prototype.setAvail = function(availBit) {
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

exports.Textr = Textr;
// Apparently if I don't add function to the export, they stay private




// module.exports = {
// 	moveText: function(txtArray, txtNum, io){
// 	     if(txtNum < txt.length-1){
// 	        txtNum += 1;
// 	    } else {
// 	        txtNum = 0;
// 	    }

// 	    io.emit('myFunc', {'txt': txt[txtNum]});
// 	},
// 	setAvail: function(availBit) {
//      available = availBit;
//      if (oldAvailable == available) {
//          // do nothing
//      } else {
//          if (!available) {
//              console.log("");
//              // triggerEvent();
//          } else {
//              console.log("Beat Beat Beat!");
//              // txtNum+=1;
//              moveText();
//          }
//      }
//      oldAvailable = available;
//  }
// };
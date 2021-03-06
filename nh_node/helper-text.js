var txtNum = 0;
var txt = ['Do', 'Not', 'Be', 'Afraid'];
// Set Availability Boolean
var available = true;
// Create a copy to store previous state
var oldAvailable = available;
var io = {};

// Maximum length of the words
var maxArray = 8;

module.exports = {
    setIo: function(thisIO){
        io = thisIO;
        // console.log(io);
    },

    moveText: function(){
        if(txtNum < txt.length-1){
            txtNum += 1;
        } else {
            txtNum = 0;
        }
        io.emit('myFunc', {'txt': txt[txtNum]});
    },

    setAvail: function(availBit){
        available = availBit;
         if (oldAvailable == available) {
             // do nothing
         } else {
             if (!available) {
                 // console.log("");
                 // triggerEvent();
             } else {
                 // console.log("Beat Beat Beat!");
                 // txtNum+=1;
                 this.moveText();
             }
         }
         oldAvailable = available;
    },

    addWord: function(thisWord){
        txt.push(thisWord);
        if(txt.length > maxArray){
            txt.splice(0, 1);
        }
    }

}

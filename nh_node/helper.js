module.exports = {
    // Initiliase a function to make maps
    jsMap: function(val, A, B, a, b) {
        var mapd = (val - A) * (b - a) / (B - A) + a
        return mapd;
    },
    jsClamp: function(num, min, max) {
        return num <= min ? min : num >= max ? max : num;
    },
    randomClr: function() {
        var R = Math.floor(Math.random() * 250) + 10;
        var G = Math.floor(Math.random() * 250) + 10;
        var B = Math.floor(Math.random() * 250) + 10;

        var outputClr = 'rgb(' + R + ', ' + G + ', ' + B + ')';
        return outputClr;
    }
};
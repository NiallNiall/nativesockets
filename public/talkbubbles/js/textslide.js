var homeheroClr = document.getElementById("home-hero");

var slideIndex = 0;
var slides = document.getElementsByClassName("slidr");
var sldL = slides.length - 1;

function nextSlide() {

    var thisSlide = slides[slideIndex];
    thisSlide.classList.remove("active");

    if (slideIndex < sldL) {
        slideIndex += 1;
    } else {
        slideIndex = sldL;
    }

    var thisSlide = slides[slideIndex];
    thisSlide.classList.add("active");
    thisSlide.onchange();
}

function prevSlide() {

    var thisSlide = slides[slideIndex];
    thisSlide.classList.remove("active");

    if (slideIndex > 0) {
        slideIndex -= 1;
    } else {
        slideIndex = 0;
    }

    var thisSlide = slides[slideIndex];
    thisSlide.classList.add("active");
    thisSlide.onchange();
}


// setInterval(function(){ 
// nextSlide()
//  }, 3000);

document.onkeydown = checkKey;

function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
    } else if (e.keyCode == '40') {
        // down arrow
    } else if (e.keyCode == '37') {
        // left arrow
        turnDark()
    } else if (e.keyCode == '39') {
        // right arrow
        turnLight();
    }

}

function turnDark(){
    homeheroClr.classList.add('dark');
    changeBubbleClr('#00506e');
}

function turnLight(){
    homeheroClr.classList.remove('dark');
    changeBubbleClr(bubbleColourPink);
}
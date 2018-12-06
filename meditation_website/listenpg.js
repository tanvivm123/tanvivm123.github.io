function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}




var myAudio = document.getElementById("myAudio");
function playAudio(){
  myAudio.pause();
  myAudio.currentTime = 0;
  myAudio.play();
}

function togglePlay(element) {
    playAudio();
  setTimeout(function(){
    playAudio();
  },8000);

};



var myAudio2 = document.getElementById("myAudio2");
function playAudio(){
myAudio2.pause();
myAudio2.currentTime = 0;
myAudio2.play();
}

function togglePlay2(element) {
playAudio2();
setTimeout(function(){
playAudio2();
},60000);

};



var myAudio3 = document.getElementById("myAudio3");
function playAudio(){
myAudio3.pause();
myAudio3.currentTime = 0;
myAudio3.play();
}

function togglePlay3(element) {
playAudio();
setTimeout(function(){
playAudio();
},180000);

};



var myRange = document.getElementById("myRange");

myRange.addEventListener("input", function(){
  myAudio.volume = myRange.value;
});


var myRange2 = document.getElementById("myRange2");

myRange2.addEventListener("input", function(){
  myAudio2.volume = myRange2.value;
});


var myRange3 = document.getElementById("myRange3");

myRange3.addEventListener("input", function(){
  myAudio3.volume = myRange3.value;
});


var myRange4 = document.getElementById("myRange4");

myRange4.addEventListener("input", function(){
  myAudio4.volume = myRange4.value;
});



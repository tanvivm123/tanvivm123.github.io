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


//   function play(){
//        var audio = document.getElementById("audio");
//        audio.play();
//                  }

// var song = audio();
// song.src = "songg.mp3";


          var myAudio = document.getElementById("myAudio");
          var isPlaying = false;

          function togglePlay() {
            if (isPlaying) {
              myAudio.pause()
            } else {
              myAudio.play();
            }
          };
          myAudio.onplaying = function() {
            isPlaying = true;
          };
          myAudio.onpause = function() {
            isPlaying = false;
          };


          var myAudio2 = document.getElementById("myAudio2");
          var isPlaying = false;

          function togglePlay2() {
            if (isPlaying) {
              myAudio2.pause()
            } else {
              myAudio2.play();
            }
          };
          myAudio2.onplaying = function() {
            isPlaying = true;
          };
          myAudio2.onpause = function() {
            isPlaying = false;
          };


                    var myAudio3 = document.getElementById("myAudio3");
          var isPlaying = false;

          function togglePlay3() {
            if (isPlaying) {
              myAudio3.pause()
            } else {
              myAudio3.play();
            }
          };
          myAudio3.onplaying = function() {
            isPlaying = true;
          };
          myAudio3.onpause = function() {
            isPlaying = false;
          };


                    var myAudio4 = document.getElementById("myAudio4");
          var isPlaying = false;

          function togglePlay4() {
            if (isPlaying) {
              myAudio4.pause()
            } else {
              myAudio4.play();
            }
          };
          myAudio4.onplaying = function() {
            isPlaying = true;
          };
          myAudio4.onpause = function() {
            isPlaying = false;
          };

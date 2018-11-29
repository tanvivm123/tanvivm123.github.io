var clickable = document.getElementById("clickable");
var clickyThing = document.getElementById("clickyThing");


clickable.onclick = function (){
	clickyThing.classList.toggle("clicked");
	document.body.style.backgroundImage = "url('blackbgcrack.png')";
}


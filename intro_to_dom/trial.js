var clickable = document.getElementById("clickable");
var clickyThing = document.getElementById("clickyThing");


clickable.onclick = function (){
	// clickable.style.backgroundColor = "blue";
	// clickable.style.width = "400px";
	// clickable.style.height = "400px";
clickyThing.classList.toggle("clicked");
}


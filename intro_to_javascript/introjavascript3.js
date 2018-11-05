// var thing = "she is pretty "

// var thatThing = thing + "cool"

// console.log(thatThing)

// document.write(thatThing)

// var people = ["nalin", "elizabeth", "owen", "alice", "rebecca", "rebecca", "tanvi", "seth", "will"];
// 				// 0		1			2		3			4			5		6		7		8

// var fragment = "One of the people here today is ";

// var randomPerson = Math.floor(Math.random () * people.length);

// var sentence = fragment + people [randomPerson]

// document.write(sentence)



var adj = ["blue", "excited", "tired", "angry", "frustrated", "confident", "accomplished", "content"];

var randomAdj = Math.floor(Math.random() * adj.length)

// var noun1 = ["monkey", "dog", "elephant", "penguin", "ant", "old man", "baby", "butterfly"];

// var randomNoun1 = Math.floor(Math.random() * noun1.length);

var noun2 = ["ate pizza", "danced", "slept for 10 hours", "traveled for 20 hours", "swam", "went out", "hopped"];

var randomNoun2 = Math.floor(Math.random() * noun2.length);

var sentence = "I am feeling " + adj[randomAdj] + " " + " because I " + noun2[randomNoun2];

// document.write(sentence)

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;
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



var adj = ["smelly", "pink", "pretty", "crazy", "minimalist", "digital", "hairy", "loud", "tall", "cute", "talkative"];

var randomAdj = Math.floor(Math.random() * adj.length)

var noun1 = ["monkey", "dog", "elephant", "penguin", "ant", "old man", "baby", "butterfly"];

var randomNoun1 = Math.floor(Math.random() * noun1.length);

var verb1 = ["dance about", "sing", "jump", "laugh", "scream", "scare", "snore"];

var randomVerb1 = Math.floor(Math.random() * verb1.length);

var sentence = "Did you know that " + adj[randomAdj] + " " + noun1[randomNoun1] + " come out at 3am and " + verb1[randomVerb1];

// document.write(sentence)

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;
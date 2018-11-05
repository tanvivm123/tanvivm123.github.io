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



var adj = ["scary", "smelly", "weird", "crazy", "horrifying", "creeky", "hairy", "loud", "old", "cute",];

var randomAdj = Math.floor(Math.random() * adj.length)

var noun1 = ["gorilla", "wolf", "dinosaur", "vampire", "witch", "dracula", "bat", "pumpkin"];

var randomNoun1 = Math.floor(Math.random() * noun1.length);

var noun2 = ["the man", "the teacher", "the baby", "the security", "the tourist", "the actor", "me"];

var randomNoun2 = Math.floor(Math.random() * noun2.length);

var sentence = "Yesterday the " + adj[randomAdj] + " " + noun1[randomNoun1] + " scared " + noun2[randomNoun2];

// document.write(sentence)

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;
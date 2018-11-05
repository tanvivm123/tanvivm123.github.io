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



var name1 = ["Mary", "Jackie", "Kelso", "Steven", "Michael", "Eric", "Red", "Donna", "Kitty"];

var randomName1 = Math.floor(Math.random() * name1.length);

var name2 = ["Mary", "Jackie", "Kelso", "Steven", "Michael", "Eric", "Red", "Donna", "Kitty"];

var randomName2 = Math.floor(Math.random() * name2.length);

var noun1 = ["the halloween party", "the cafe", "Eric's basement", "museum", "hospital", "movies", "shop", "records store"];

var randomNoun1 = Math.floor(Math.random() * noun1.length);

var noun2 = ["evening", "week", "monday", "night", "weekend", "month", "afternoon"];

var randomNoun2 = Math.floor(Math.random() * noun2.length);

var sentence = name2[randomName2] + " went to " + noun1[randomNoun1] + " last " + noun2[randomNoun2];

// document.write(sentence)

// name[randomName] + " and " +

var sentenceElement = document.getElementById("sentence");

sentenceElement.innerText = sentence;
function Random(max) {
	return Math.floor(Math.random() * max);
}
function NextDecision(decisionA, decisionB) {
	let valueA = "value= '" + decisionA + "'";
	let valueB = "value= '" + decisionB + "'";
	document.getElementById('a').innerHTML = "<input type='submit' " + valueA + "></input>";
	document.getElementById('b').innerHTML = "<input type='submit' " + valueB + "></input>";
}
document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent = "<div class='buttons'>";
	newContent += "<input id='joke' type='submit' value='Tell me a joke!'></input><br>";
	newContent += "<input id='fact' type='submit' value='How are you?'></input><br>";
	newContent += "<div><input id='question' type='text' placeholder='Ask a yes or no question!'></input><input id='submit' type='submit' value='Ask'></input></div><br>";
	newContent += "</div><div class='spacer'></div><div class='griffin'></div>";
	document.querySelector(".content").innerHTML = newContent;
	let childNode = document.createElement("p");
	let image = document.createElement("img");
	image.src = 'https://easydrawingguides.com/wp-content/uploads/2020/06/Griffin-Step-10.png';
	document.querySelector(".content .griffin").appendChild(childNode);
	document.querySelector(".content .griffin").appendChild(image);
	let urlJoke = "https://geek-jokes.sameerkumar.website/api?format=json";
	let urlFact = "https://asli-fun-fact-api.herokuapp.com/";
	let urlSubmit = "https://quoteclear.web.app/api/random";
	document.getElementById("joke").addEventListener("click", function(event) {
		event.preventDefault();
		fetch(urlJoke)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			childNode.innerHTML = json.joke + " hahahahaha";
		});
	});
	document.getElementById("fact").addEventListener("click", function(event) {
		event.preventDefault();
		fetch(urlFact)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			childNode.innerHTML = "I'm doing great! Did you know that " + json.data.fact + "?";
		});
	});
	document.getElementById("submit").addEventListener("click", function(event) {
		event.preventDefault();
		fetch(urlSubmit)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			let random = Random(4);
			if (random == 0) {
				childNode.innerHTML = "No, " + json.text;
			}
			else if (random == 1) {
				childNode.innerHTML = "Yes! " + json.text;
			}
			else if (random == 2) {
				childNode.innerHTML = "Maybe... " + json.text;
			}
			else {
				childNode.innerHTML = "Ask again later."
			}
		});
	});
});

document.getElementById("gameTroll").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent = "<div class='game-box'><div class='gameEvents'><p>It's dark.<br>It's cold.<br>Do you...</p></div><div class='gameButtons'>"
	newContent += "<div id='a'><input type='submit' value='A. Look for your flashlight?'></input></div>"
	newContent += "<div id='b'><input type='submit' value='B. Walk forward?'></input></div></div></div>"
	document.querySelector(".content").innerHTML = newContent;
	document.getElementById('a').addEventListener("click", function(event) {
		document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>No Flashlight.<br>It's getting warmer.<br>It's getting louder.<br>Do you...</p>";
		NextDecision("A. Follow the noise?","B. Walk forward?");
		document.getElementById('a').addEventListener("click", function(event) {
			document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>It's hot.<br>It's breathing down your neck.<br>It got you.</p>";
		});
		document.getElementById('b').addEventListener("click", function(event) {
			document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>There's a door.<br>The door is locked.<br>It's Hot.<br>Do you...</p>";
                	NextDecision("A. Call for help?","B. Bang on the door?");
			document.getElementById('a').addEventListener("click", function(event) {
				document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>Nobody heard.<br>It covers your mouth.<br>It got you.</p>";
			});
			 document.getElementById('b').addEventListener("click", function(event) {
				 document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>It's loud.<br>It's breathing down your neck.<br>It got you.</p>";
			});
		});
	});
	document.getElementById('b').addEventListener("click",function(event) {
		document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>There's a door.<br>The door is locked.<br>It's getting warmer.<br>Do you...</p>";
                NextDecision("A. Check to the left for a key?","B. Bang on the door?");
		document.getElementById('a').addEventListener("click", function(event) {
			document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>It's hot.<br>It's breathing down your neck.<br>There's a key on the floor.<br>Do you...</p>";
                	NextDecision("A. Unlock the door?","B. Turn around?");
			document.getElementById('a').addEventListener("click", function(event) {
				document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>You run out into a bright open field.<br>You let out a sigh of relief.<br>You are free.<br>But so is the It.</p>"
			});
			document.getElementById('b').addEventListener("click", function(event) {
                                document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>It's horrifying.<br>You stab it with the key.<br>It screeches.<br>Your ears bleed.<br>It got you.</p>"
			});
		});
		document.getElementById('b').addEventListener("click", function(event) {
			document.querySelector(".content .game-box .gameEvents").innerHTML = "<p>It's loud.<br>It's breathing down your neck.<br>It got you.</p>";
		});
	});
});

function Random(max) {
	return Math.floor(Math.random() * max);
}
document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent = "<div class='buttons'>";
	newContent += "<input id='joke' type='submit' value='Tell me a joke!'></input><br>";
	newContent += "<input id='fact' type='submit' value='How are you?'></input><br>";
	newContent += "<div><input id='question' type='text' placeholder='Ask a yes or no question!'></input><input id='submit' type='submit' value='Ask'></input></div><br>";
	newContent += "</div><div class='griffin'></div>";
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

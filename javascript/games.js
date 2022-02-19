document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent = "<div class='buttons'>";
	newContent += "<input id='joke' type='submit' value='Tell me a joke!'></input><br>";
	newContent += "<input id='fact' type='submit' value='How are you?'></input><br>";
	newContent += "<input id='question' type='text' placeholder='Ask a yes or no question!'></input><input id='submit' type='submit' value='Ask'></input><br>";
	newContent += "</div><div class='griffin'><img src='https://easydrawingguides.com/wp-content/uploads/2020/06/Griffin-Step-10.png'></div>";
	document.querySelector(".content").innerHTML = newContent;
	let urlJoke = "https://geek-jokes.sameerkumar.website/api?format=json";
	let urlFact = "https://asli-fun-fact-api.herokuapp.com/";
	document.getElementById("joke").addEventListener("click", function(event) {
		event.preventDefault();
		fetch(urlJoke)
		.then(function(response) {
			return response.json();
		}).then(function(json) {
			let child = "<p>" + json.joke + "</p>";
			document.querySelector(".content .griffin").appendChild(child);
		});
	});
});

document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent = "<div class='buttons'>";
	newContent += "<input id='joke' type='submit' value='Tell me a joke!'></input><br>";
	newContent += "<input id='fact' type='submit' value='How are you?'></input><br>";
	newContent += "<input id='question' type='text' placeholder='Ask a yes or no question!'></input><input id='submit' type='submit' value='Ask'></input><br>;
	document.querySelector(".content").innerHTML = newContent;
});

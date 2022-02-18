document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	document.querySelector(".content").innerHTML = "";
	let newContent += "<div class='buttons'>";
	newContent += "<input id='joke' type='submit' value='Tell me a joke!'></input><br>";
	newContent += "<input id='fact' type='submit' value='How are you?'></input><br>";
});

document.getElementById("gameGriffin").addEventListener("click", function(event) {
	event.preventDefault();
	let content[] = document.getElementsByClassName("content");
	for (let i = 0; i < content.length; ++i) {
		content[i].innerHTML = "";
	}
});

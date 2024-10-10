function displayRecipe(event) {
	event.preventDefault();

	new Typewriter("#output", {
		strings: "Recipe Recipe Recipe",
		autoStart: true,
		loop: false,
		delay: 30,
		cursor: "",
	});
}

let button = document.querySelector("#submit");
button.addEventListener("submit", displayRecipe);

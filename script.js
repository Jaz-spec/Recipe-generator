function displayHeading() {
	// Typewriter for the main title
	let title = document.querySelector("#title");
	let typewriter = new Typewriter(title, {
		loop: false,
		delay: 30,
		cursor: "",
	});
	typewriter
		.pauseFor(500)
		.typeString(
			"Hello, I'm your personal AI chef. <br />I'm here to write quick and easy recipes for you!"
		)
		.start();

	// Typewriter for the input label
	let label = document.querySelector("#label");
	let inputTypewriter = new Typewriter(label, {
		loop: false,
		delay: 30,
		cursor: "",
	});
	inputTypewriter
		.pauseFor(4500)
		.typeString("What would you like to make?")
		.start();
}

function showInput() {
	let input = document.querySelector("#input");
	input.classList.remove("hidden");
	input.focus();
}

function generateRecipe(event) {
	event.preventDefault();

	// setting variables to input apiUrl
	let input = document.querySelector("#input");
	let context =
		"You are a passionate chef. Please make your recipes short and simple. Display the recipes in basic HTML. Write the title in <h2></h2> and the sub-heading in <h3><h3/>. Don't wrap the text in '```html ```'";
	let prompt = `Please write a recipe to make ${input.value}`;
	let apiKey = "oa9f439cb230f940atf8b1fac2e41075";
	let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

	// removing focus from input element
	input.blur();

	// Removing hidden class list from main section
	let main = document.querySelector("#main");
	main.classList.remove("hidden");

	// Displaying a loading message on screen
	let output = document.querySelector("#output");
	let typewriter = new Typewriter(output, {
		loop: false,
		delay: 30,
	});
	typewriter
		.pauseFor(1000)
		.typeString("Writing your recipe...")
		.pauseFor(2000)
		.deleteAll()
		.start();

	// Displaying loading message in console
	console.log(prompt);
	console.log("Generating recipe...");

	// Calling API and calling display function
	axios.get(apiUrl).then(displayRecipe);
}

function displayRecipe(response) {
	let output = document.querySelector("#output");
	let typewriter = new Typewriter(output, {
		loop: false,
		delay: 10,
		cursor: "",
	});
	typewriter.pauseFor(500).typeString(response.data.answer).start();

	console.log("Recipe generated!");
}

displayHeading();
setTimeout(showInput, 5800);

let button = document.querySelector("#submit");
button.addEventListener("submit", generateRecipe);

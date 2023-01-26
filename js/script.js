// Variables 

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

const quotes = [{
	quote: "Who was your first crush, and what were they like?",
	person: "Nicks Mogu",
	status: false
}, {
	quote: "Can you describe what your first heartbreak was like?",
	person: "Miyang",
	status: false
}, {
	quote: "What was the biggest lesson from your worst breakup?",
	person: "Nicko",
	status: false
}, {
	quote: "What's something you used to believe about relationships but no longer do?",
	person: "Nicko",
	status: false
}, {
	quote: "What's something surprising that you were afraid of as a child?",
	person: " ",
	status: false
}, {
	quote: "What was your favorite food growing up?",
	person: " ",
	status: false
}, {
	quote: "What's your favorite meal now?",
	person: " ",
	status: false
}, {
	quote: "What was the first album you ever owned?",
	person: " ",
	status: false
}, {
	quote: "How does your life compare to how you imagined it growing up?",
	person: " ",
	status: false
}, {
	quote: "What was your dream job when you were a kid?",
	person: " ",
	status: false
}];


	let lastQuestion = 0;
	let random = 0;


btn.addEventListener('click', function(){



	/* Generate random number */
		random = Math.floor(Math.random() * quotes.length);

	/* Check's Repeatition */
	while (lastQuestion === random) {
		random = Math.floor(Math.random() * quotes.length);
	}

	/* Display Output to Interface */
		quote.innerText = quotes[random].quote;
		person.innerText = quotes[random].person;
		lastQuestion = random;
});
// Variables 

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");
let reset = document.querySelector("#reset-quote");

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



btn.addEventListener('click', function(){

	
	// Filter and Create new array with a false status
	let newArray = quotes.filter(quote => quote.status === false);
	console.log(newArray);
	console.log(newArray.length)

	// Check if there is available questions
	if(newArray.length > 0){

		//Generate Random Number
		random = Math.floor(Math.random() * newArray.length);
		
		quote.innerText = newArray[random].quote;
		newArray[random].status = true;
	} else {
		// If No More Question
		quote.innerText = "No More Question";
		btn.style.display = "none";
		reset.style.display = "block";
	}
		
});


reset.addEventListener('click', function(){

	// Loop to change all status back to false
	for(let i = 0; i < quotes.length; i++) {
		quotes[i].status = false;
	}

	// Changing display style of buttons
	reset.style.display = "none";
	btn.style.display = "block";

	quote.innerText = "Please Click The Button to Generate a Random Question, Goodluck and Enjoy";

	
});

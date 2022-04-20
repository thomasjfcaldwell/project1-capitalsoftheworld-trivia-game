let player; // These are my varibles for the functions of the game

let numWrongQuestions = 0;

let score = 0;

let url = 'https://restcountries.com/v3.1/all';

let countries = [];

let countriesCapitals = [];

let questionNumber = 0;

// Below is where I brought in the data to fill fil the questions

fetch(`${url}`, {
	method: 'GET',
})
	.then((response) => {
		return response.json();
	}) // this is me bringing in the data and separating the counties and capitals in to objects
	.then((response) => {
		countries = response;
		for (country of countries) {
			let pair = {
				cont: country.name,
				capital: country.capital,
			};
			// console.log(pair);
			countriesCapitals.push(pair);
		}
	})
	.then((reponse) => {
		// This is me calling the functions that need to be in the outside scope
		getQuestion();
		getAnswerOptions();
		countDown();
		selectedAnswer();
		keepScore();
		nextQuestion();
		resetHandler();
		removeQuestion();
		wrongQuestionAlert();
	})
	.catch((err) => {
		console.log(err);
	});

const question = document.querySelector('.CapitalCity');
let currentQuestion;

let currentQ = '';
let currentA = '';

function getQuestion() {
	// This is where I filled the question and did a method so they are different each time. Also to make sure the correct answer is available
	currentQuestion = Math.floor(Math.random() * countriesCapitals.length);
	console.log(currentQuestion);

	currentQ = countriesCapitals[currentQuestion].capital;
	console.log(currentQ);

	currentA = countriesCapitals[currentQuestion].cont.common;
	question.innerHTML = `${countriesCapitals[currentQuestion].capital} is the capital of`;
}
// this is me bringing in the buttons from the html file
let answerA = document.querySelector('#A');
let answerB = document.querySelector('#B');
let answerC = document.querySelector('#C');
let answerD = document.querySelector('#D');

// This is me bringing in the options for the answers. I also had to do a sort method so that that the answers were different buttons each time.
function getAnswerOptions() {
	let answers = [countriesCapitals[currentQuestion].cont.common];

	for (let i = 0; i < 3; i++) {
		const randomNumber = Math.floor(Math.random() * countriesCapitals.length);
		const country = countriesCapitals[randomNumber].cont.common;
		answers.push(country);
		console.log(country);
	}

	answers.sort((a, b) => 0.5 - Math.random()); // here

	answerA.innerText = answers[0];
	answerB.innerText = answers[1];
	answerC.innerText = answers[2];
	answerD.innerText = answers[3];
}

function winnerMessage() {
	document.getElementById('winnermessage').style.display = 'block';
	document.getElementById('question__box').style.display = 'none';
}

function looserMessage() {
	document.getElementById('loosermessage').style.display = 'block';
	document.getElementById('question__box').style.display = 'none';
}
// this is where we add the point and move the questions along. Also giving out winning messages and losing ones
let answer = document.querySelector('.answerbuttons');

answer.addEventListener('click', selectedAnswer);

function selectedAnswer() {
	let buttonClicked = event.target.dataset.name;
	if (event.target.innerText === currentA) {
		score += 10;
		if (score === 100) return winnerMessage();
	} else {
		numWrongQuestions++;
		if (numWrongQuestions > 5) {
			return looserMessage();
		}
	}
	questionNumber += 1;
	document.getElementById('score').innerHTML = score;
	document.getElementById('question number').innerHTML = questionNumber;
	document.getElementById('wrong answers').innerHTML = numWrongQuestions;

	getQuestion();
	getAnswerOptions();
}

// this is where we make sure everything gets reset when the game is over.

let resetButton = document.getElementById('reset button');

resetButton.addEventListener('click', resetHandler);

function resetHandler() {
	score = 0;
	document.getElementById('score').innerHTML = score;
	questionNumber = 0;
	document.getElementById('question number').innerHTML = questionNumber;
	numWrongQuestions = 0;
	document.getElementById('wrong answers').innerHTML = numWrongQuestions;
	document.getElementById('winnermessage').style.display = 'none';
	document.getElementById('loosermessage').style.display = 'none';
	document.getElementById('question__box').style.display = 'block';
}
resetHandler();

let tryAgain = document.getElementById('winner__message-button');
tryAgain.addEventListener('click', resetHandler);

let tryAgainLooser = document.getElementById('looser__message-button');
tryAgainLooser.addEventListener('click', resetHandler);

// wrong questions color change

var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById('myBtn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
	modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
/*let counter = 10;

function countDown(event) {
	counter--;
	if (counter >= 0) {
		id = document.getElementById('counter');
		id.innerHTML = counter;
	}
	if (counter === 0) {
		id.innerHTML = 'Times up - Next Question';
	}

	return countDown();
}
*/

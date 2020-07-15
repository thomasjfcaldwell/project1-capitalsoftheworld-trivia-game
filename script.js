let player;

let numWrongQuestions = 0;

let score = 0;

let url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';

let countries = [];

let countriesCapitals = [];

let questionNumber = 0;

fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all', {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
		'x-rapidapi-key': '9dad7becddmsh6715395af5b4c35p10b3fejsn35d607ff9598',
	},
})
	.then((response) => {
		return response.json();
	})
	.then((response) => {
		countries = response;
		for (country of countries) {
			//console.log(country);
			let pair = {
				cont: country.name,
				capital: country.capital,
			};
			countriesCapitals.push(pair);
			//console.log(pair.capital);
		}
	})
	.then((reponse) => {
		getQuestion();
		getAnswerOptions();
		countDown();
		selectedAnswer();
		keepScore();
		nextQuestion();
		resetHandler();
	})
	.catch((err) => {
		//console.log(err);
	});
//console.log(countriesCapitals);
// This button will invoke the first question
let startButton = document.querySelector('.startbutton');

startButton.addEventListener('click', getGameStarted);

function getGameStarted(event) {
	startButton.style.display = 'none';
}
//

// These function will bring in 4 different answers- 1 being the correct answer and the question

//const choicesAnswers = Array.from(document.getElementsByClassName('buttons'));
//console.log(countriesCapitals);
const question = document.querySelector('.CapitalCity');
let currentQuestion;

let currentQ = '';
let currentA = '';

function getQuestion() {
	currentQuestion = Math.floor(Math.random() * countriesCapitals.length);

	currentQ = countriesCapitals[currentQuestion].capital;

	currentA = countriesCapitals[currentQuestion].cont;
	question.innerHTML = `${countriesCapitals[currentQuestion].capital} is the capital of`;
}

//console.log(question)
//getQuestion()
let answerA = document.querySelector('#A');
let answerB = document.querySelector('#B');
let answerC = document.querySelector('#C');
let answerD = document.querySelector('#D');

function getAnswerOptions() {
	let answers = [countriesCapitals[currentQuestion].cont];

	for (let i = 0; i < 3; i++) {
		const randomNumber = Math.floor(Math.random() * countriesCapitals.length);
		const country = countriesCapitals[randomNumber].cont;
		answers.push(country);
	}

	answers.sort((a, b) => 0.5 - Math.random());

	answerA.innerText = answers[0];
	answerB.innerText = answers[1];
	answerC.innerText = answers[2];
	answerD.innerText = answers[3];

	//console.log(answers);
}

//

// this function will reconize what button was pressed  if the the question was correctly answered

// players choice is === to the correct answer

//let questionAnswered = true;

let answer = document.querySelector('.answerbuttons');

answer.addEventListener('click', selectedAnswer);

function selectedAnswer() {
	let buttonClicked = event.target.dataset.name;
	if (event.target.innerText === currentA) {
		score += 10;
	} else {
		numWrongQuestions++;
		if (numWrongQuestions > 5) {
			alert('You lost!');
		}
	}
	questionNumber += 1;
	document.getElementById('score').innerHTML = score;
	document.getElementById('question number').innerHTML = questionNumber;

	getQuestion();
	getAnswerOptions();
}

let resetButton = document.getElementById('reset button');

resetButton.addEventListener('click', resetHandler);

function resetHandler() {
	score = 0;
	document.getElementById('score').innerHTML = score;
	questionNumber = 0;
	document.getElementById('question number').innerHTML = questionNumber;
}
resetHandler();
//

//this will recorded the score and add 1 everytime the player gets one correct
// if question is answered correctly increment by 1

//let scoreKeeper = 0;

//function keepScore() {
//if (answer == question) {
//	scoreKeeper += 10;
//	document.getElementById('score').innerHTML = score;
//} else {
//	scoreKeeper += 0;
//	document.getElementById('score').innerHTML = score;
//}
//}

//

/// This function will move the questions on without have to refresh

/*let questionCounter = document.createElement('p');

let questionNumber = 0;

function nextQuestion() {
	questionNumber++;
	questionCounter.innerText = questionNumber;
}

// This will signal that the game has finished
// inform of win or lose and show percentage of correct answers

//if (gameFinished === 20){

//} else{
// dont display
//}

const maxQuestions = 20;

function endGame() {
	if (scoreKeeper > 15) {
		return 'Well done you Win!';
	} else {
		return ' Unlucky you loss - please try again';
	}
}

//

// player can press at anytime and score will return to 0
// restart hit scoreKeeper returns to 0

let restart = 0;
function restartGame() {}

let counter = 10;

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

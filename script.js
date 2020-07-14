let player;

let url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';

let countries = [];

let countriesCapitals = [];

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

function getQuestion() {
	const getCapitalForQuestion = document.querySelector('.CapitalCity');

	getCapitalForQuestion.innerHTML = `${countriesCapitals[0].capital} is the capital of`;

	//for (let i = 0; i < countriesCapitals.capitals.length; i++) {}
}
//getQuestion()

function getAnswerOptions() {
	let answerA = document.querySelector('#A');
	let answerB = document.querySelector('#B');
	let answerC = document.querySelector('#C');
	let answerD = document.querySelector('#D');

	answerA.innerHTML = `${countriesCapitals[0].cont}`;
	answerB.innerHTML = `${countriesCapitals[120].cont}`;
	answerC.innerHTML = `${countriesCapitals[96].cont}`;
	answerD.innerHTML = `${countriesCapitals[200].cont}`;
}

//

// this function will reconize what button was pressed  if the the question was correctly answered

// players choice is === to the correct answer

//let questionAnswered = true;

const answer = document.querySelectorAll('.buttons');

answer.addEventListener('click', selectedAnswer);

function selectedAnswer(event) {
	const buttonClicked = event.target.data - set;

	if (buttonClicked === 'A') {
		style.background = 'red';
	}
	if (buttonClicked === 'B') {
		style.background = 'blue';
	}
	if (buttonClicked === 'C') {
		style.background = 'green';
	}
	if (buttonClicked === 'D') {
		style.background = 'yellow';
	}
}

//

// this will recorded the score and add 1 everytime the player gets one correct
// if question is answered correctly increment by 1

let scoreKeeper = 0;

function keepScore() {
	if ((questionAnswered = true)) {
		scoreKeeper += 10;
		document.getElementById('score').innerHTML = score;
	} else {
		scoreKeeper += 0;
		document.getElementById('score').innerHTML = score;
	}
}

//

// This will signal that the game has finished
// inform of win or lose and show percentage of correct answers

//if (gameFinished === 20){

//} else{
// dont display
//}

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

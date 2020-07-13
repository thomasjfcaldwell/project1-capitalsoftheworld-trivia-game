let player;

let url = 'https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all';

fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all', {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
		'x-rapidapi-key': '9dad7becddmsh6715395af5b4c35p10b3fejsn35d607ff9598',
	},
})
	.then((response) => {
		//console.log(response).name;
	})
	.catch((err) => {
		//console.log(err);
	});

// This button will invoke the first question
let startButton = document.getElementById('startbutton');

startButton.addEventListener('click', getGameStarted);

function getGameStarted(event) {
	console.log('ready');
}
//

// These function will bring in 4 different answers- 1 being the correct answer and the question
const question = document.querySelector('CapitalCity');

const choicesAnswers = Array.from(document.getElementsByClassName('buttons'));
function getQuestion() {}

function getAnswerOptions() {}

//

// this function will reconize if the the question was correctly answered

// players choice is === to the correct answer

let questionAnswered = true;
function selectAnswer() {}

//

// this will recorded the score and add 1 everytime the player gets one correct
// if question is answered correctly increment by 1

let scoreKeeper = 0;
function keepScore() {
	//if (i = true; i++)
}

//

// This will signal that the game has finished
// inform of win or lose and show percentage of correct answers

//if (gameFinished === 20){

//} else{
// dont display
//}

let gameFinshed = 0;
function endGame() {}

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
	countDown();
}

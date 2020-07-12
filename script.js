/*let counter = 10;

function countDown () {
	counter--;
	if (counter >= 0) {
		id = document.getElementById('counter');
		id.innerHTML = counter;
	}
	if (counter === 0) {
		id.innerHTML = 'Times up - Next Question';
	}
} (countDown);

console.log(counter)*/

/*fetch('https://ajayakv-rest-countries-v1.p.rapidapi.com/rest/v1/all', {
	method: 'GET',
	headers: {
		'x-rapidapi-host': 'ajayakv-rest-countries-v1.p.rapidapi.com',
		'x-rapidapi-key': '9dad7becddmsh6715395af5b4c35p10b3fejsn35d607ff9598',
	},
})
	.then((response) => {
		console.log(response).name;
	})
	.catch((err) => {
		console.log(err);
   });*/

let startButton = document.getElementById('startbutton');

startButton.addEventListener('click', getGameStarted);

function getGameStarted(event) {
	console.log('ready');
}

function getQuestion() {}

function selectAnswer() {}

function keepScore() {}

function endGame() {}

function restartGame() {}

function tellTime() {}

var trivia = {
	questionBank: [
		"Who was the much reviled president of the Confederacy during the Civil War?",
		"What did John Leland of Cheshire, New England, present to President Thomas Jefferson in 1802 (the item weighed over 1,200 pounds!)?",
		"In the presidential election of 1912, Theodore Roosevelt ran for a third (though not successive) term as the nominee for which party?",
		"During which time span did the US receive over 20 million immigrants, many of whom were from Central, Eastern, or Southern Europe?",
		"Commenting on the end of chattel slavery, who remarked that \"The slave went free; stood a brief moment in the sun; then moved back again toward slavery\"?",
		"To what does the \"Cult of Domesticity\" refer?",
		"In December, 1784, Thomas Jefferson wrote a letter to James Madison in which he says the following regarding Patrick Henry, \"While Mr. Henry lives another bad constitution would be formed, and saddled for ever on us. What we have to do I think is devoutly to pray for his death....\" What is it that causes Thomas Jefferson to make this remark concerning Patrick Henry?",
		"To what was the \"Massive Resistance\" movement a response?",
		"Which president was responsible for the suffering of the Cherokee on the \"Trail of Tears\"?",
		"During which years did the Civil War take place?"
	],

	questionAnswerBank: [
		"Jefferson Davis",
		"A block of cheese",
		"Bull Moose Party",
		"Between 1880-1920",
		"W.E.B. DuBois",
		"A 19th-century ideology of separate spheres for men and women",
		"Henry's position on religion and state in Virginia",
		"1950s resistance to school integration (i.e., desegregation) efforts",
		"Andrew Jackson",
		"1861-1865"
	],

	mcBank: [
		["<h4>Abraham Lincoln</h4>", "<h4>Robert E. Lee</h4>", "<h4>Ulysses S. Grant</h4>", "<h4 data-answer='y'>Jefferson Davis</h4>"],
		["<h4>A wild stallion</h4>", "<h4 data-answer='y'>A block of cheese</h4>", "<h4>A chest of gold</h4>", "<h4>An applie pie</h4>"],
		["<h4 data-answer='y'>Bull Moose Party</h4>", "<h4>Green Party</h4>", "<h4>Republican Party</h4>", "<h4>Libertarian Party</h4>"],
		["<h4>Between 1810-1860</h4>", "<h4 data-answer='y'>Between 1880-1920</h4>", "<h4>Between 1940-1970</h4>", "<h4>Between 1980-2010</h4>"],
		["<h4>Olaudah Equiano</h4>", "<h4>Frederick Douglass</h4>", "<h4 data-answer='y'>W.E.B. DuBois</h4>", "<h4>Malcom X</h4>"],
		["<h4>A popular radio program of the 1950s</h4>", "<h4>A 20th-century ideology of separate spheres for men and women</h4>", "<h4>A 1960s cult in Northern California</h4>", "<h4 data-answer='y'>A 19th-century ideology of separate spheres for men and women</h4>"],
		["<h4>Henry's position on the imminent Revolution</h4>", "<h4>Henry's position on religion and state in Pennsylvania</h4>", "<h4>Henry's incessant use of his catchphrase, \"Give me liberty, or give me death!\"</h4>", "<h4 data-answer='y'>Henry's position on religion and state in Virginia</h4>"],
		["<h4 data-answer='y'>1950s resistance to school integration (i.e., desegregation) efforts</h4>", "<h4>1960s resistance to the Vietnam War</h4>", "<h4>1970s resistance to a Woodstock sequel</h4>", "<h4>1980s resistance to the Cold War</h4>"],
		["<h4>John Quincy Adams</h4>", "<h4 data-answer='y'>Andrew Jackson</h4>", "<h4>Woodrow Wilson</h4>", "<h4>Donald Trump</h4>"],
		["<h4>1770-1776</h4>", "<h4>1845-1850</h4>", "<h4 data-answer='y'>1861-1865</h4>", "<h4>1914-1918</h4>"]
	],

	gifBank: [
		'<iframe src="//giphy.com/embed/YrfCkiGL8TPZ6" width="453.4177215189874" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="http://giphy.com/gifs/civil-war-YrfCkiGL8TPZ6">via GIPHY</a></p>',
	]
};

var correct = 0;

var incorrect = 0;

var unanswered = 0;

var currentQuestion = "";

var userChoice = "";

var usedNumbers = [];

var randomNumber = 0;

var seconds = 0;

var intervalId;

$(document).ready(function() {
	function renderQuestion() {
		$('#answerContainer').empty();
		randomNumber = Math.floor(Math.random() * trivia.questionBank.length);
		randomNumber = randomNumber.toString();
		console.log(randomNumber);

		if (usedNumbers.indexOf(randomNumber) !== -1) {
			if (usedNumbers.length === 11) {
				$('#question').html("");
				$('#answerContainer').html('<h3>That\'s it! To get quizzed again, just click restart below. Here\'s your results:<br>Number Correct: ' + correct + '<br>Number Incorrect: ' + incorrect + '<br>Number Unanswered: ' + unanswered + '</h3>' + '<div class="button" id="restart"><h4>Restart</h4></div>');
				correct = 0;
				incorrect = 0;
				unanswered = 0;
				usedNumbers = [];
				$('#restart').click(renderQuestion);
			}

			else {
				renderQuestion();
			}
		}

		else {
			currentQuestion = trivia.questionBank[randomNumber];
			console.log(currentQuestion);
			usedNumbers += randomNumber + ",";
			usedNumbers = usedNumbers.split(",");
			console.log(usedNumbers);

			$('#question').html(currentQuestion);
			
			for (var i = 0; i < 4; i++) {
				var buttonDiv = $('<div class="button">').html(trivia.mcBank[randomNumber][i]);
				$('#answerContainer').append(buttonDiv);
			}

			timer();

			$('.button').click(answerChoice);
		}
	}

	function triviaRound() {

		if (userChoice === "y") {
			$('#answerContainer').html("<h2>Correct!</h2>");
			clearInterval(intervalId);
			correct++;
			append();
		}

		else {
			$('#answerContainer').html("<h2>Incorrect!</h2>");
			clearInterval(intervalId);
			incorrect++;
			append();
		}
	}

	function append() {
		$('#answerContainer').append('<h4> Correct answer: ' + trivia.questionAnswerBank[randomNumber] + '</h4>');
		$('#answerContainer').append(trivia.gifBank[randomNumber]);
		setTimeout(renderQuestion, 5000);
	}

	function timer() {
		seconds = 30;
		$('#timer').html('Time Remaining: ' + seconds + ' Seconds');
		intervalId = setInterval(countdown, 1000);
		function countdown() {
			seconds --;
			$('#timer').html('Time Remaining: ' + seconds + ' Seconds');
			
			if (seconds === 0) {
				clearInterval(intervalId);
				unanswered++;
				console.log(unanswered);
				$('#answerContainer').html("<h2>Sorry, you\'ve run out of time!</h2>");
				append();
			}
		};
	}

	function answerChoice() {
		userChoice = $(this).children().data('answer');
		console.log(userChoice);
		triviaRound();
	}

	$('#start').click(renderQuestion);
	
});
var trivia = {
	questionBank: [
		"Who was the much reviled president of the Confederacy during the Civil War?",
		"What did John Leland of Cheshire, New England, present to President Thomas Jefferson in 1802 (the item weighed over 1,200 pounds!)?",
		"In the presidential election of 1912, Theodore Roosevelt ran for a third (though not successive) term as the nominee for which party?",
		"During which time span did the US receive over 20 million immigrants, many of whom were from Central, Eastern, or Southern Europe?",
		"Commenting on the end of chattel slavery, who remarked that \"The slave went free; stood a brief moment in the sun; then moved back again toward slavery.\"?",
		"Later in his career, Billy Graham was fairly outspoken about his concern over what?",
		"In December, 1784, Thomas Jefferson wrote a letter to James Madison in which he says the following regarding Patrick Henry, \"While Mr. Henry lives another bad constitution would be formed, and saddled for ever on us. What we have to do I think is devoutly to pray for his death....\" What is it that causes Thomas Jefferson to make this remark concerning Patrick Henry?",
		"Horace Bushnell derided what kind of parenting?",
		"Of whose oratory was Phillis Wheatley so enamored?",
		"Where and when does Aimee Semple McPherson's ministry take off?"
	],

	answerBank: {
		q0: ["<div class='button' id='ac1' data-answer='n'><h4>Abraham Lincoln</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Robert E. Lee</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Ulysses S. Grant</h4></div>", "<div class='button' id='ac4' data-answer='y'><h4>Jefferson Davis</h4></div>"],
		q1: ["<div class='button' id='ac1' data-answer='n'><h4>A wild stallion</h4></div>", "<div class='button' id='ac2' data-answer='y'><h4>A block of cheese</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>A chest of gold</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>An applie pie</h4></div>"],
		q2: ["<div class='button' id='ac1' data-answer='y'><h4>Bull Moose Party</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Green Party</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Republican Party</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Libertarian Party</h4></div>"],
		q3: ["<div class='button' id='ac1' data-answer='n'><h4>Between 1810-1860</h4></div>", "<div class='button' id='ac2' data-answer='y'><h4>Between 1880-1920</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Between 1940-1970</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Between 1980-2010</h4></div>"],
		q4: ["<div class='button' id='ac1' data-answer='n'><h4>Olaudah Equiano</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Frederick Douglass</h4></div>", "<div class='button' id='ac3' data-answer='y'><h4>W.E.B. DuBois</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Malcom X</h4></div>"],
		q5: ["<div class='button' id='ac1' data-answer='n'><h4>Abortion</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>The Civil Rights Movement</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Prayer in schools</h4></div>", "<div class='button' id='ac4' data-answer='y'><h4>Nuclear armament and warfar</h4></div>"],
		q6: ["<div class='button' id='ac1' data-answer='n'><h4>Henry's position on the imminent Revolution</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Henry's position on religion and state in Pennsylvania</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Henry's incessant use of his catchphrase, \"Give me liberty, or give me death!\"</h4></div>", "<div class='button' id='ac4' data-answer='y'><h4>Henry's position on religion and state in Virginia</h4></div>"],
		q7: ["<div class='button' id='ac1' data-answer='y'><h4>Ostrich Parenting</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Helicopter Parenting</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Intensive Parenting</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Extensive Parenting</h4></div>"],
		q8: ["<div class='button' id='ac1' data-answer='n'><h4>Frederick Douglass</h4></div>", "<div class='button' id='ac2' data-answer='y'><h4>George Whitefield</h4></div>", "<div class='button' id='ac3' data-answer='n'><h4>Barack Obama</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Donald Trump</h4></div>"],
		q9: ["<div class='button' id='ac1' data-answer='n'><h4>Waco, Texas, early 1900s</h4></div>", "<div class='button' id='ac2' data-answer='n'><h4>Waco, Texas, mid 1900s</h4></div>", "<div class='button id='ac3' data-answer='y'><h4>Los Angeles, California, early 1900s</h4></div>", "<div class='button' id='ac4' data-answer='n'><h4>Los Angeles, California, mid 1900s</h4></div>"]
	}
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
		randomNumber = Math.floor(Math.random() * trivia.questionBank.length);
		randomNumber = randomNumber.toString();
		console.log(unanswered);

		if ((randomNumber === usedNumbers[0]) || (randomNumber === usedNumbers[1]) || (randomNumber === usedNumbers[2]) || (randomNumber === usedNumbers[3]) || (randomNumber === usedNumbers[4]) || (randomNumber === usedNumbers[5]) || (randomNumber === usedNumbers[6]) || (randomNumber === usedNumbers[7]) || (randomNumber === usedNumbers[8]) || (randomNumber === usedNumbers[9])) {
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
			
			if (currentQuestion === trivia.questionBank[0]) {
				$('#answerContainer').html(trivia.answerBank.q0[0] + trivia.answerBank.q0[1] + trivia.answerBank.q0[2] + trivia.answerBank.q0[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[1]) {
				$('#answerContainer').html(trivia.answerBank.q1[0] + trivia.answerBank.q1[1] + trivia.answerBank.q1[2] + trivia.answerBank.q1[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[2]) {
				$('#answerContainer').html(trivia.answerBank.q2[0] + trivia.answerBank.q2[1] + trivia.answerBank.q2[2] + trivia.answerBank.q2[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[3]) {
				$('#answerContainer').html(trivia.answerBank.q3[0] + trivia.answerBank.q3[1] + trivia.answerBank.q3[2] + trivia.answerBank.q3[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[4]) {
				$('#answerContainer').html(trivia.answerBank.q4[0] + trivia.answerBank.q4[1] + trivia.answerBank.q4[2] + trivia.answerBank.q4[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[5]) {
				$('#answerContainer').html(trivia.answerBank.q5[0] + trivia.answerBank.q5[1] + trivia.answerBank.q5[2] + trivia.answerBank.q5[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[6]) {
				$('#answerContainer').html(trivia.answerBank.q6[0] + trivia.answerBank.q6[1] + trivia.answerBank.q6[2] + trivia.answerBank.q6[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[7]) {
				$('#answerContainer').html(trivia.answerBank.q7[0] + trivia.answerBank.q7[1] + trivia.answerBank.q7[2] + trivia.answerBank.q7[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else if (currentQuestion === trivia.questionBank[8]) {
				$('#answerContainer').html(trivia.answerBank.q8[0] + trivia.answerBank.q8[1] + trivia.answerBank.q8[2] + trivia.answerBank.q8[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}

			else {
				$('#answerContainer').html(trivia.answerBank.q9[0] + trivia.answerBank.q9[1] + trivia.answerBank.q9[2] + trivia.answerBank.q9[3]);
				timer();
				$('#ac1').click(answerChoice1);
				$('#ac2').click(answerChoice2);
				$('#ac3').click(answerChoice3);
				$('#ac4').click(answerChoice4);
			}
		}
	};

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
	};

	function append() {
		if (currentQuestion === trivia.questionBank[0]) {
			$('#answerContainer').append("<h4>Correct answer: Jefferson Davis</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[1]) {
			$('#answerContainer').append("<h4>Correct answer: A block of cheese</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[2]) {
			$('#answerContainer').append("<h4>Correct answer: Bull Moose Party</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[3]) {
			$('#answerContainer').append("<h4>Correct answer: Between 1880-1920</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[4]) {
			$('#answerContainer').append("<h4>Correct answer: W.E.B. DuBois</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[5]) {
			$('#answerContainer').append("<h4>Correct answer: Nuclear armament and warfare</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[6]) {
			$('#answerContainer').append("<h4>Correct answer: Henry's position on religion and state in Virginia</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[7]) {
			$('#answerContainer').append("<h4>Correct answer: Ostrich Parenting</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else if (currentQuestion === trivia.questionBank[8]) {
			$('#answerContainer').append("<h4>Correct answer: George Whitefield</h4>");
			setTimeout(renderQuestion, 5000);
		}

		else {
			$('#answerContainer').append("<h4>Correct answer: Los Angeles, California, early 1900s</h4>");
			setTimeout(renderQuestion, 5000);
		}
	};

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
	};

	function answerChoice1() {
		userChoice = $('#ac1').data('answer');
		console.log(userChoice);
		triviaRound();
	};

	function answerChoice2() {
		userChoice = $('#ac2').data('answer');
		console.log(userChoice);
		triviaRound();
	};

	function answerChoice3() {
		userChoice = $('#ac3').data('answer');
		console.log(userChoice);
		triviaRound();
	};

	function answerChoice4() {
		userChoice = $('#ac4').data('answer');
		console.log(userChoice);
		triviaRound();
	};


	$('#start').click(renderQuestion);
	
});
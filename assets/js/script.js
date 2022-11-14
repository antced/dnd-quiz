var quiz = [{
    question: "What color is the sky?",
    answers: {
        one: "Red",
        two: "Green",
        three: "Blue",
        four: "Yellow"
    },
    rightAnswer: "Blue",
}, {
    question: "What is 2+2?",
    answers: {
        one: "4",
        two: "6",
        three: "2",
        four: "10.5"
    },
    rightAnswer: "4",
}, {
    question: "What data type equates to true/false?",
    answers: {
        one: "String",
        two: "Boolean",
        three: "Number",
        four: "Function"
    },
    rightAnswer: "Boolean",
}, {
    question: "How many answer choices does this question have?",
    answers: {
        one: "One",
        two: "Five",
        three: "Three",
        four: "Four"
    },
    rightAnswer: "Four",
}, {
    question: "Is this the last question?",
    answers: {
        one: "No",
        two: "Maybe",
        three: "I don't know",
        four: "Yes, because there are only five questions."
    },
    rightAnswer: "Yes, because there are only five questions.",
}
];

var buttonDiv = document.getElementById("buttonDiv");
var buttonArr = buttonDiv.getElementsByTagName("button");
var question = document.getElementById("questionText");
var result = document.createElement("p");
var scoreBox = document.getElementById("highscoreBox");

var questionNumber = 0;
var time = 60;

// GIVEN I am taking a code quiz
// WHEN I click the start button
document.getElementById("startBtn").addEventListener("click", setQuiz);
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// TODO SAVE HIGH SCORE IN LOCAL STORAGE

function setTimer() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {

        time--;
        document.getElementById("timer").textContent = "Timer: " + time;
        takeQuiz();
        if (time <= 0) {
            time = 0;
            document.getElementById("timer").textContent = "Timer: " + time;
            clearInterval(timerInterval);
            setHighScore();
        } else if (time <= 0 || questionNumber === 5) {
            // time = 0;
            document.getElementById("timer").textContent = "Timer: " + time;
            clearInterval(timerInterval);
            setHighScore();
        }

    }, 1000);
}


function setQuiz() {
    // remove start button
    var startBtn = document.getElementById("startBtn");
    startBtn.remove();

    // remove paragraph text
    var directions = document.getElementById("directions");
    directions.remove();

    // create 4 buttons
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);
    var newBtn = document.createElement("button");
    document.getElementById("buttonDiv").appendChild(newBtn);

    // assign ids to all buttons
    buttonArr[0].setAttribute("id", "button-1")
    buttonArr[1].setAttribute("id", "button-2")
    buttonArr[2].setAttribute("id", "button-3")
    buttonArr[3].setAttribute("id", "button-4")
    // go to actual quiz part and don't return here
    setTimer();
}

function takeQuiz() {

    if (questionNumber < quiz.length) {
        // rename the h1 to question name
        question.textContent = quiz[questionNumber].question;

        // apply the answer options to the button text
        buttonArr[0].textContent = quiz[questionNumber].answers.one;
        buttonArr[1].textContent = quiz[questionNumber].answers.two;
        buttonArr[2].textContent = quiz[questionNumber].answers.three;
        buttonArr[3].textContent = quiz[questionNumber].answers.four;
        // allow each button to listen for a click, and then check if it's correct
        buttonArr[0].addEventListener("click", checkAnswer)
        buttonArr[1].addEventListener("click", checkAnswer)
        buttonArr[2].addEventListener("click", checkAnswer)
        buttonArr[3].addEventListener("click", checkAnswer)
    } else {
        console.log("gameover");
    }

}

function checkAnswer(event) {
    // remove previous correct/incorrect paragraph
    var results = document.getElementsByTagName("p");
    results[0].remove();
    // checking if clicked button is correct or not
    var clickedBtn = document.getElementById(event.target.id);
    if (clickedBtn.textContent === quiz[questionNumber].rightAnswer) {
        document.getElementById("answerStatus").appendChild(result);
        result.textContent = "Correct!"
        questionNumber++;
        takeQuiz();
    } else {
        document.getElementById("answerStatus").appendChild(result);
        result.textContent = "Incorrect"
        questionNumber++
        time-=15
        takeQuiz();
    }
}

function setHighScore() {
    var highScore = document.getElementById("questionText");
    highScore.textContent = "All done!";
    // remove button div
    buttonDiv.remove();
    // turn answerstatus into set your high score
    result.textContent = "Set your high score."
    // popular highscorebox
    var scoreForm = document.createElement("form");
    scoreBox.appendChild(scoreForm);
}
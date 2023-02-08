const question = document.getElementById('question');
const quizContainer = document.getElementById('quiz-container');
const scorecard = document.getElementById('scorecard');
const option0 = document.getElementById('option0');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const next = document.querySelector('.next');
const points = document.getElementById('score');
const span = document.querySelectorAll('span');
let i = 0;
let score = 0;

/**
* Function to display the questions and provide statistics for rolling information
**/ 
function displayQuestion() {
    for (let a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerText = `${questionBank[i].question}`;
    option0.innerText = questionBank[i].option[0];
    option1.innerText = questionBank[i].option[1];
    option2.innerText = questionBank[i].option[2];
    option3.innerText = questionBank[i].option[3];
    stat.innerText = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

/**
* Function to display and calculate the score with a running score linked to container.
* Incremented by +1 if correctly answered.
* If and else statements in place to change colour of span to either green or red depending on answer.
* 500 of a second timeout set to change to next question.
**/ 
function calcScore(e) {
    if (e.innerText === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById("running-score").innerText = 'Correctly Answered: ' + score + "/15";
        document.getElementById(e.id).style.background = 'green';
    } else {
        document.getElementById(e.id).style.background = 'red';
    }
    setTimeout(nextQuestion, 500);
}

/**
* Function to display the next question
* if and else statements in place to change image and texts depending on results
* and keep a rolling tally for this.
**/ 
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    } else {
        changeSantaImage();
        changeScoreText();
        points.innerText = 'You Scored:  ' + score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block';

    }
}

/**
* Back to quiz button event
**/ 
function backToQuiz() {
    location.reload();
}

/**
* Function to display and check the answers
* and list them in order
**/ 
function checkAnswer() {
    const answerBank = document.getElementById('answerBank');
    const answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (let a = 0; a < questionBank.length; a++) {
        const list = document.createElement('li');
        list.innerText = questionBank[a].answer;
        answers.appendChild(list);
    }
}

/**
* Function to display the santa image in results, based on scores of
* either equal or less than 7 or equal or less than 14
* (default is already set to maximum of 15/15 in quiz.html)
**/ 
function changeSantaImage() {
    if (score <= 7) {
        document.getElementById('santa-img').src = 'assets/images/bad-santa.jpeg';
    } else if (score <= 14) {
        document.getElementById('santa-img').src = 'assets/images/good-santa.jpeg';

    }
}

/**
* Function to display the text in results, based on scores of
* either equal or less than 7 or equal or less than 14
* (default text is already set to maximum of 15/15 in quiz.html)
**/ 
function changeScoreText() {
    if (score <= 7) {
        document.getElementById('score-text').innerText = 'BAD SANTA!';
    } else if (score <= 14) {
        document.getElementById('score-text').innerText = 'SANTA BABY!';

    }
}

/**
* Event Listeners
**/ 

function initializeQuiz() {
    next.addEventListener('click', nextQuestion);
    displayQuestion();
}

window.addEventListener('DOMContentLoaded', initializeQuiz);
  
    

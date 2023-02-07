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

// function to display the questions 
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

// function to calculate the score
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

// function to display the next question
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

// click events to next button
next.addEventListener('click', nextQuestion);

// Back to Quiz button event
function backToQuiz() {
    location.reload();
}

// function to check the answers
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

// function to change the Santa image based on the score
function changeSantaImage() {
    if (score <= 7) {
        document.getElementById('santa-img').src = 'assets/images/bad-santa.jpeg';
    } else if (score <= 14) {
        document.getElementById('santa-img').src = 'assets/images/good-santa.jpeg';

    }
}

// function to change the results text based on the score, less than or equal to 7, less than or equal to 14, a default of 15 for Winner
function changeScoreText() {
    if (score <= 7) {
        document.getElementById('score-text').innerText = 'BAD SANTA!';
    } else if (score <= 14) {
        document.getElementById('score-text').innerText = 'SANTA BABY!';

    }
}

displayQuestion();

window.addEventListener('DOMContentLoaded', initializeQuiz);
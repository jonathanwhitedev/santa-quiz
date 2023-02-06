var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

// function to display the questions 
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerText= `${questionBank[i].question}`;
    option0.innerText= questionBank[i].option[0];
    option1.innerText= questionBank[i].option[1];
    option2.innerText= questionBank[i].option[2];
    option3.innerText= questionBank[i].option[3];
    stat.innerText= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

// function to calculate the score
function calcScore(e){
    if(e.innerText===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById("running-score").innerText = score + "/15";
        document.getElementById(e.id).style.background= 'green';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,500);
}

// function to display the next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerText= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block';
    }
}

// click events to next button
next.addEventListener('click',nextQuestion);

// Back to Quiz button event
function backToQuiz(){
    location.reload();
}

// function to check the answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerText= questionBank[a].answer;
        answers.appendChild(list);
    }
}

function changeSantaImage() {
    if (score < 7) {
      document.getElementById('santa-img').src='assets/images/bad-santa.jpeg';   
     } else {
      document.getElementById('santa-img').src='assets/images/good-santa.jpeg';
     } 

}


displayQuestion();


// list of questions for quiz bank
var questionBank= [
    {
        question : 'What happened in the 1914 Christmas Day truce during the First World War?',
        option : ['A game of football between British and German soldiers','English comrades did not quarrel','Pope Benedict XV has ascended to the papacy','Everyone had Coca Cola'],
        answer : 'A game of football between British and German soldiers'
    },
    {
        question : 'Which country annually sends a Christmas Tree to be erected in Londons Trafalgar Square?',
        option : ['Cananda','Denmark','Norway','Germany'],
        answer : 'Norway'
    },
    {
        question : 'What north-eastern US state holds the Guiness world record for largest Snowman?',
        option : ['Massachusetts','Rhode Island','Maine','New Hampshire'],
        answer : 'Maine'
    },
    {
        question : 'How many of Rudolphs eight companions names start with the letter D?',
        option : ['3','1','2','4'],
        answer : '3'
    },
    {
        question : 'What do Americans leave for Santa on Christmas Eve?',
        option : ['Gift List','Baileys Irish Cream','Sherry & Mince Pie','Milk & Cookies'],
        answer : 'Milk & Cookies'
    },
    {
        question : 'In Home Alone, where are the McCallisters going on vacation when they leave Kevin behind?',
        option : ['London','Paris','New York','Milan'],
        answer : 'Paris'
    },
    {
        question : 'In what country did Silent Night originate?',
        option : ['Italy','England','Austria','Russia'],
        answer : 'Austria'
    },
    {
        question : 'The French word "Noel" is often used around Christmas, but what was its original meaning in Latin?',
        option : ['Night','Merry','Birth','New'],
        answer : 'Birth'
    },
    {
        question : 'What are you supposed to do when you find yourself under the mistletoe?',
        option : ['Kiss','Hug','Dance','Bow'],
        answer : 'Kiss'
    },
    {
        question : 'What gifts did The Three Wise Men give Jesus on his birthday?',
        option : ['Bread, Wine, And Diamond','Gold, Saphire, and Topaz','Gold, Frankincense, and Myrrh','Amber, Emerald, and Ruby'],
        answer : 'Gold, Frankincense, and Myrrh'
    },
    {
        question : 'Which ocean can Christmas Island be found in?',
        option : ['Indian','Pacific','Atlantic','Arctic'],
        answer : 'Indian'
    },
    {
        question : 'What is the best selling Christmas single of all time in the UK?',
        option : ['Bing Crosby - White Christmas','Band Aid - Do They Know its Christmas?','Mariah Carey - All I want for Christmas is you','Wham! - Last Christmas'],
        answer : 'Band Aid - Do They Know its Christmas?'
    },
    {
        question : 'Where are the Christmas presents brought by a witch?',
        option : ['Spain','Italy','Portugal','France'],
        answer : 'Italy'
    },
    {
        question : 'What is the most popular meal for Christmas in Japan?',
        option : ['Roast Turkey','KFC Fried Chicken','Turkey Ramen','Sushi'],
        answer : 'KFC Fried Chicken'
    },
    {
        question : 'In which year was the first Christmas card sent?',
        option : ['1925','1890','1912','1843'],
        answer : '1843'
    }
]

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
    question.innerHTML= 'Question.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

// function to calculate the score
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
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
        points.innerHTML= score+ '/'+ questionBank.length;
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
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();


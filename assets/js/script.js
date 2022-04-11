//build HTML & CSS outline 
// 1 container , 1 static header
//array of objects to hold questions(each q is obj)
//start quiz function (start timer (75s) and hide welcome text/show first q)
//getElementById for header and answer btns update txt
//event listener that listens on clicked answers
//check btn clicked matches answer(if matches= show correct or incorrect (-10secs))
//update page to show nxt q
//repeat until out of q or timer<=0
//stop quiz function (stop timer, display score, enter initials)
//hide q show end page
//store initials and score in localstorage on btn click of submit
//switch to highscore page 
// display highscore from localstorage

var countDown = document.getElementById("countdown")
var main = document.getElementById("main")
var startBtn = document.getElementById("start_btn")


function countdown() {
    var timeLeft = 5;

    var timeInterval = setInterval(function() {
        if (timeLeft > 0){
            countDown.textContent = timeLeft;
            timeLeft--;
        }
        else if (timeLeft === 0 ){
             countDown.textContent = "Time is up!";
             clearInterval(timeInterval);
        }
        
    }, 1000 );
    displayQuestions();
}

function displayQuestions () {

    var questions = [{

        question: "What is the capital of The United Kingdom?",
        choices: ["Manchester", "Birmingham", "London", "Bristol"],
        answer: 2
    },
    {
        question: "What is the capital of The United States?",
        choices: ["California", "Washington, D.C", "New York", "Florida"],
        answer: 1
    },
    {
        question: "What is the capital of Canada?",
        choices: [ "Ottawa", "Toronto", "Montreal", "Quebec City"],
        answer: 0
    },
    {   question: "What is the capital of Mexico?",
        choices: ["Tijuana", "Puebla", "Oaxaca", "Mexico City"],
        answer: 3
    
    },
    {
        question: "What is the capital of Australia?",
        choices: ["Canberra", "Sydney", "Perth", "Melbourne"],
        answer: 0
    }
    ];
    for (var i =0; i<questions.length; i++) {
        
    }
}

startBtn.addEventListener("click", function()
{
    countdown();
    displayQuestions();
})
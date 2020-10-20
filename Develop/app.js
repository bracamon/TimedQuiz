// 1. navigate to page
// 2. click start
// 3. new page
// 4. counter starts
// 5. question is displayed
// 6. select answer from 4 choices
// 7. click button for choice answer
// 8. new question is displayed
// 9. steps 6-8 repeat
// 10. answer last question
// 11. timer is at 0
// 12. total score is displayed
// 13. under total score a textbox to enter initials
// 14. enter initials and click button to submit
// 15. new page with high scores displays score and initials
// 16. repeat steps 1-15 for next participant
// 17. click button to clear data and wipe slate



// create 30 questions with 4 possible answers for each one
var quest = [
    "What is pseudo-code?",
    "Why is a commit message useful?",
    "What is a repository?",
    "Which of these headers is the smallest?",
    "Bootstrap was developed by which company?",
    "ul stands for which of the following?"
];




// set up for loop to cycle through each question

// set up valueTrue for each answer

// set up if/else statements for correct and incorrect responses
    // if you answer with incorrect answer, subtract 1 second from timer for each wrong answer and cycle to next question
    // if you answer correctly, add 1 point to score for every correct answer and cycle to next questions

// tally up number of correct answers

// create a 60 second timer to countdown to 0
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
}, 1000);


// button with event listener to start the game
var startBtn = document.getElementById("startBtn");
var clearBtn = document.getElementById("clearBtn");

startBtn.addEventListener("click", function() {
    alert("Hello World!")
});

clearBtn.addEventListener("click", function() {
    alert("Starting from scratch!")
});

// buttons with event listeners for each of the answer options

// prompt to enter initials
// display initials next to total score

// bonus - display performance by topic to convey areas that need improvement




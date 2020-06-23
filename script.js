// prewritten document short cuts

var options = document.querySelector("#option-list");
var go = document.querySelector("#go");
var welcomeMessage = document.querySelector("#prompt");
var title = document.querySelector("#title");
// this is a presaved prompt messsage for when the user goes inbetween the actual quiz, leader board and the welcome page
var MessageText = "Welcome to the coding quiz challenge! When you click the button below a series of questions will appear"+
"and you will have to respond to them as quickly as possible. If you answer a question incorrectly 5 points will be subtracted"+
"from your  score. If you answer a question correctly then 5 points will be added to your  score. Once all of the questions "+
"have been answered, the remaining time left on the quiz will be added to your score and that will be the final score. Good Luck!"
// this will be the variable that holds the players score at the end of the game.
var score;
var count;
// Each question is an object consisting of the question (which is a string), an array of promopts, and an integer correct which corresponds to the index of the correct answer
var masterArray = [
{prompt: "Bootstrap is a _ which you can link to your HTML file to help style your page.", answers: ["CDN", "Language","Event listener"], index:1},
{prompt: "Local storage, geo location, and platform, are all elements that you can find by accessing the browser's __", answers: ["body", "cookies", "window/ DOM"], index:2},
{prompt: "How do you properly access the last element in an array?", answers:["array.lastElement()","array[array.length-1]","array.lastIndexOf() "], index:1},
{prompt: "The 'trinity' of clientside coding is considered to be HTML, CSS and ___", answers: ["Javascript", "Bootstrap", "Jquery"], index:0},
{prompt: "To print values out into the console of a page, you use the Javascript command __", answers:["return", "console.value()", "console.log()"], index:2}
]
// The randomly shuffled array will be stored in this index
var questionArray =[];

// When the start button is clicked this function runs
// characteristics of this function is it initiates the timer in the top right corner
// It hides the Welcome screen
// Runs the function that generates the display of the questions
function start(){
    go.style.display = "none";
    welcomeMessage.style.display = "none"; 
    count =0;
    // starts timer 

    // randomly shuffles array of questions
    for(var i =0;i<5; i++){
        var selector = Math.floor(Math.random()*masterArray.length)
        questionArray.push(masterArray[selector]);
        masterArray.splice(selector,1);
    }
    console.log(questionArray);
    console.log(masterArray);
    createQuestionBoard();

}
// 
function createQuestionBoard(){
    // checks which question number we are on which is kept track on in var count
    if(count ===5){
        return endGame();
    }
    title.textContent = questionArray[count].prompt;

    var ans1 = document.createElement("button");
    var ans2 = document.createElement("button");
    var ans3 = document.createElement("button");
    ans1.textContent = questionArray[count].answers[0];
    ans2.textContent = questionArray[count].answers[1];
    ans3.textContent = questionArray[count].answers[2];
    ans1.setAttribute("class", "alert alert-primary")
    ans2.setAttribute("class", "alert alert-primary")
    ans3.setAttribute("class", "alert alert-primary")

    if(questionArray[count].index === 0){
        ans1.setAttribute("onclick", "correct()")
        ans2.setAttribute("onclick", "incorrect()")
        ans3.setAttribute("onclick", "incorrect()")
    }
    if(questionArray[count].index === 1){
        ans1.setAttribute("onclick", "incorrect()")
        ans2.setAttribute("onclick", "correct()")
        ans3.setAttribute("onclick", "incorrect()")
    }
    if(questionArray[count].index === 2){
        ans1.setAttribute("onclick", "incorrect()")
        ans2.setAttribute("onclick", "incorrect()")
        ans3.setAttribute("onclick", "correct()")
    }
    options.appendChild(ans1);
    options.appendChild(ans2);
    options.appendChild(ans3);
    
}

// When the correct answer is selected this function will run to add points to the score and append a message
function correct(){
    document.getElementById("#verify").textContent = "Correct";
    score+= 5;
    count++;
    if(count!==5){
        createQuestionBoard();
    }
    if(count===5){
        endGame()
    }
    
}
// When the incorrect answer is selected this function will run to add points to the score and append a message
function incorrect(){
    document.querySelector("#verify").textContent = "Incorrect"; 
    score -=5;
    count++;
    if(count!==5){
        createQuestionBoard();
    }
    if(count===5){
        endGame()
    }
}

function endGame(){
    masterArray = questionArray;
    questionArray = [];

}


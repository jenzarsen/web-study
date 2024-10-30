
var buttonColors = ["red","blue", "green", "yellow"];

var gamePattern =[];
var userClickedPattern = [];

var isGameStarted = false;
var level = 0;
var currentLevel = 0;

init();

document.addEventListener("keydown", function(event){
    if(!isGameStarted){
        isGameStarted = true;
        nextSequence();
    }
});

function init(){
    $(".btn").on("click", function(event){
        var userChosenColor = event.target.id;
        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);
        selectButton(userChosenColor);
        checkAnswer(userChosenColor);
    });
}


function selectButton(color){

    $("."+color).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
   playSound(color);
   animatePress(color);
}

function playSound(color)
{
    var audio = new Audio("./sounds/"+color+".mp3");
    audio.play();
}

function nextSequence(){

    currentLevel = 0;
    userClickedPattern = [];

    $("h1").text("Level "+level);
    level++;
    var randomNumber = Math.floor(Math.random() * 4);
    var color = buttonColors[randomNumber];
    playSound(color);
    selectButton(color);
    gamePattern.push(color); 
}

function animatePress(currentColor){
    $("."+currentColor).addClass("pressed");

    setTimeout(() => {
        $("."+currentColor).removeClass("pressed");
    }, 100);  
}

function checkAnswer(color){
    var correctColor = gamePattern[currentLevel];
    console.log(correctColor + color);
    if(correctColor === color){
        currentLevel++;
        console.log("Succes");
        if(level === currentLevel){
            //End of Sequence
            userClickedPattern = []
            setTimeout(()=>{
                nextSequence();
            }, 1000);
        }
    }else{
        gameOver();
    }
}

function gameOver(){
    playSound("wrong");
    $("body").addClass("game-over");

    setTimeout(() => {
        $("body").removeClass("game-over");
    }, 200);

    $("h1").text("Game Over, Press Any Key to Restart");

    startOver();
}

function startOver(){
    gamePattern = [];
    isGameStarted = false;
    level = 0;
    currentLevel = 0;
}
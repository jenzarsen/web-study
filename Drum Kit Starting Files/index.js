document.querySelectorAll(".drum").forEach(addListener);

function addListener(button){
    button.addEventListener("click", handleClick);
}

function playSound(sfxPath){
    var audio = new Audio(sfxPath);
    audio.play();
}

function playSoundFromLetter(letter){
    switch (letter) {
        case "w":
            playSound("./sounds/tom-1.mp3");
        break;
    
        case "a":
             playSound("./sounds/tom-2.mp3");
        break;
    
        case "s":
             playSound("./sounds/tom-3.mp3");
        break;
    
        case "d":
             playSound("./sounds/tom-4.mp3");  
        break;
    
        case "j":
            playSound("./sounds/snare.mp3");  
        break;
    
        case "k":
            playSound("./sounds/crash.mp3");  
        break;
    
        case "l":
            playSound("./sounds/kick-bass.mp3");  
        break;
    
        default:
         break;
       }
}

function handleClick(){
    // var audio = new Audio("./sounds/tom-1.mp3");
    // audio.play();

   var buttonInnerHTML = this.innerHTML;
   playSoundFromLetter(buttonInnerHTML);
   buttonAnimation(buttonInnerHTML);
}
  


document.addEventListener("keydown", function(event){
    playSoundFromLetter(event.key);
    buttonAnimation(event.key);
});

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
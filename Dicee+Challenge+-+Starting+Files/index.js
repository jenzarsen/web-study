var randomNumber1 = diceRoll();
var randomNumber2 = diceRoll();

document.querySelector("img.img1").setAttribute("src", "./images/dice"+randomNumber1+".png");
document.querySelector("img.img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2){
    //Player 1 Wins
    document.querySelector("h1").textContent = "🚩Player 1 Wins!";
} else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 Wins!🚩";
} else{
    //Draw
    document.querySelector("h1").innerHTML = "Draw!";
}

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1;
}
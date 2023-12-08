

var player1=prompt("Please enter  Player 1 name");
var player2=prompt("Please enter  Player 2 name");

var randomNumber1= (Math.floor(6*(Math.random()))+1);

var randomNumber2= (Math.floor(6*(Math.random()))+1);




document.querySelector(".img1").setAttribute("src", "./images/dice"+randomNumber1+".png" );

document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png" );

if(randomNumber1>randomNumber2){

    document.querySelector("h1").innerHTML=player1+" 🚩 Wins ";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="That's a draw RETRY AGAIN";
}else{
    document.querySelector("h1").innerHTML=player2+" 🚩 Wins ";
}

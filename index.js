function randomnum123(index){
    var num = Math.floor(Math.random() * (6) + 1 );
    var randomDiceImage = "dice" + num +".png";//dice1.png - dice6.png
    var randomImageSource = "images/" + randomDiceImage;// images/dice1.png - 
    var imgae = document.querySelectorAll("img")[index];
    imgae.setAttribute("src",randomImageSource)

    return num;
}   

let num1 = randomnum123(0);
let num2 = randomnum123(1);
let num3 = randomnum123(2);

// if num1 > num2 say Play 1 Wins!
// if num2 > num1 say Play 2 Wins!
// if num2 = num1 say Draw!

if (num1 > num2 && num1 > num3) {
    document.querySelector("h1").innerHTML = "Play 1 Wins!"
}
else if (num2 > num1 && num2 > num3 ) {
    document.querySelector("h1").innerHTML = "Play 2 Wins!"
} 
else if (num3 > num1 && num3 > num2 ) {
    document.querySelector("h1").innerHTML = "Play 3 Wins!"
} 
else if (num1 > num3 && num2 > num3 && num1 == num2 ) {
    document.querySelector("h1").innerHTML = "Play 1 and 2 Wins!"
} 
else if (num1 > num2 && num3 > num2 && num1 == num3 ) {
    document.querySelector("h1").innerHTML = "Play 1 and 3 Wins!"
} 
else if (num2 > num1 && num3 > num1 && num2 == num3 ) {
    document.querySelector("h1").innerHTML = "Play 2 and 3 Wins!"
} 
else {
    document.querySelector("h1").innerHTML = "Draw!"
}


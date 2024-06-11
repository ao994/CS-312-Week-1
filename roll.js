//Function to get random image file containing die number
function randomDie()
{
    var number = Math.floor(Math.random() * 6) + 1;

    var filename = "images/dice" + number + ".png";

    return filename;
}

//generate first die
var die1 = randomDie();
document.querySelector("img.img1").setAttribute("src", die1);

//generate second die
var die2 = randomDie();
document.querySelector("img.img2").setAttribute("src", die2);

//declare title variable
var title = "Refresh Me";

//determine title depending on outcome
if(die1 > die2)
{
    title = "Player 1 Wins!";
}
else if(die1 < die2)
{
    title = "Player 2 Wins!";
}
else
{
    title = "Draw!";
}

//change title
document.querySelector("#title").innerHTML = title;


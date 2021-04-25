  var deck = [];
  var deck_length = deck.length - 1;
function pickCard(){

  var cardnumber = 13;
//for (var plCard = 0; plCard <=2; plCard++)
    var selectCard1 = Math.floor(Math.random() * cardnumber + 1) ; //1-13
    var selCardImg = "card" + selectCard1 + ".png"; //card.png - card13.png
    var randomImageSource = "image/" + selCardImg; //images/card1.png - images/card13.png
    deck.push(randomImageSource);

//  }
var deck_length = deck.length - 1;
var image1 = document.querySelectorAll("img")[0]; //select the default pick card //
if(deck_length < 6){
image1.setAttribute("src", deck[deck_length]); //change the default pick card to the 3rd random card of the player//
}
for (var i = 0; i<6; i++){
  var image2 = document.querySelectorAll(".plyCard")[i]; // select the location to display player one random cards//
  image2.setAttribute("src", deck[i]); // display the randomly generated cards on pressing pick cards//
}
}
var pt1 = deck.reduce((a,b) => a + b,0);
var result= document.querySelectorAll("pt1");
result.innerHTML= pt1;
//If player 1 wins
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}


console.log("Up and running!");

var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
	];

var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
	} else {
console.log("Sorry, try again.");
playAgain();
	} 
}


var flipCard = function(){
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	this.setAttribute("src", (cards[cardId].cardImage));
		if (cardsInPlay.length === 2) {
			checkForMatch();
		if (cardsInPlay[0] === cardsInPlay[1]){
			alert("It's a match!")
		} else {alert("Sorry, try again")}
	}
}

var playAgain = function(){
	location.reload();
}

document.getElementById('reset-button').addEventListener("click" , playAgain);

/*function shuffleCards(cardsInPlay) {
    for (var i = cardsInPlay.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = cardsInPlay[i];
        cardsInPlay[i] = cardsInPlay[j];
        cardsInPlay[j] = temp;
    }
    return cardsInPlay;
}*/

var createBoard = function(){
	for (var i = 0; i < cards.length; i++){
	var cardElement = document.createElement("img");
	cardElement.setAttribute("src" , "images/back.png");
	cardElement.setAttribute("data-id", i);
	cardElement.addEventListener("click" , flipCard);
	document.getElementById("game-board").appendChild(cardElement);
	}
}

createBoard();







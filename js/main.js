
//console.log("User flipped " + cardOne);
//console.log("User flipped " + cardThree);

var cards = ["king", "queen", "queen", "king"];
var cardsInPlay = [];
var cardOne = cards[0];
var cardTwo = cards[1];
var cardThree = cards[2];
var cardFour = cards[3];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var flipCard = function(cardID) {
	console.log("User flipped " + cards[cardID]);
	cardsInPlay.push(cards[cardID]);
	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}
flipCard(1);
flipCard(3);
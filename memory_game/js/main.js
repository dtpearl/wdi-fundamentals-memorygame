console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function(){

	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			alert("You found a match!");
		} else alert("Sorry, try again.");
	}
}



var flipCard = function(cardId){

	var cardOne = cards[cardId];

	cardsInPlay.push(cardOne);

	console.log("User flipped " + cardOne);
	checkForMatch();
}; // End of flipCard function

flipCard(2);
flipCard(3);
// var cardTwo = cards[3];

// 	cardsInPlay.push(cardTwo);

	// console.log("User flipped " + cardTwo);


console.log(cardsInPlay);


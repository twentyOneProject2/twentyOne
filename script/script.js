const twentyOne = {};
twentyOne.url = "https://deckofcardsapi.com/api/deck/new/draw/?count=6";
//assign card numerical value from string
twentyOne.getCardValue = (card) => {
    if (card.value === "ACE") {
        card.value = 11
    } else if (card.value === "JACK" || card.value === "QUEEN" || card.value === "KING") {
                card.value = 10
    } else {
        card.value = card.value * 1
    };
    return card.value
}
// select img area and assign the src url and alt text
// twentyOne.assignImage = (imgId, imgUrl, imgValue, imgSuit) => {
//     document.getElementById(`${imgId}`).innerHTML = `<img src = ${imgUrl} alt = ${imgValue} of ${imgSuit}`;
// }

twentyOne.dealCards = () => {
    fetch(twentyOne.url)  
        .then( (res) => {
            return res.json();
        })
        .then( (cardData) => {
            const cardsArray = cardData.cards;
            let p1c1 = cardsArray[0];
            let p1c2 = cardsArray[1];
            let p2c1 = cardsArray[2];
            let p2c2 = cardsArray[3];
            let p3c1 = cardsArray[4];
            let p3c2 = cardsArray[5];

            // twentyOne.assignImage(player1Card1, p1c1.image, p1c1.value, p1c1.suit);
            // twentyOne.assignImage(player1Card2, p1c2.image, p1c2.value, p1c2.suit);
            // twentyOne.assignImage(player2Card1, p2c1.image, p2c1.value, p2c1.suit);
            // twentyOne.assignImage(player2Card2, p2c2.image, p2c2.value, p2c2.suit);
            // twentyOne.assignImage(player3Card1, p3c1.image, p3c1.value, p3c1.suit);
            // twentyOne.assignImage(player3Card2, p3c2.image, p3c2.value, p3c2.suit);

            let player1Score = twentyOne.getCardValue(p1c1) + twentyOne.getCardValue(p1c2);
            let player2Score = twentyOne.getCardValue(p2c1) + twentyOne.getCardValue(p2c2);
            let player3Score = twentyOne.getCardValue(p3c1) + twentyOne.getCardValue(p3c2);

            twentyOne.determineWinner = () => {
            if (player1Score > player2Score && player1Score > player3Score) {
                document.querySelector(".winner1").stlye.display = "block";
            } else if (player2Score > player1Score && player2Score > player3Score) {
                document.querySelector(".winner2").stlye.display = "block";
            } else if (player3Score > player1Score && player3Score > player2Score) {
                document.querySelector(".winner3").stlye.display = "block";
            } else {
                document.querySelector(".tie").stlye.display = "block";
            }
        }

        twentyOne.determineWinner();

        })
    };

twentyOne.init = () => {
    document.querySelector(".cardsToDeal").addEventListener("click", twentyOne.dealCards)
};

twentyOne.init();
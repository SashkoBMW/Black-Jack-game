let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let aLive = false;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.querySelector("#cards-el");
let count = 0;


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    if (randomNumber === 1) {
        randomNumber = 11;
    }
    if (randomNumber >= 11) {
        randomNumber = 10;
    }
    return randomNumber;
}

function startGame() {

    aLive = true;
    cardsEl.textContent = "Karte: " 
    for (let i=0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Suma: " + sum;
if (sum <= 20) {
    message = "Vucite novu kartu";
}
else if (sum === 21) {
    message = "Pobeda!!!";
    hasBlackJack = true;
}
else if (sum > 21) {
    message  = "Vise srece drugi put!";
    aLive = false;
}
messageEl.textContent = message;
}
function newCard() {
if (aLive === true) {
    
    console.log("New card");
    let card = getRandomCard();
    
    sum += card;
    
    startGame();
    cardsEl.textContent = "Karta: " + card;
}

}

function newGame() {
    messageEl.textContent = "Nova igra" ;
    count = 0;
    sum = 0;
    cardsEl.textContent = "Karte: " + 0;
    sumEl.textContent = "Suma: " + 0;
    sum = cards[0] + cards[1];
	location.reload();
    
}
messageEl.textContent = message;


   
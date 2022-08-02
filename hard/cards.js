// write your classes:
class Card {
    constructor(suit,val) {
        this.suit = suit;
        this.val = val;
        this.faceUp = false;
        this.abbreviation = String(val) + String(suit);
        let a;
        let b;
        if (this.val === "A") {
            a = "Ace";
        }
        else if (this.val === "J") {
            a = "Jack";
        }
        else if (this.val === "Q") {
            a = "Queen";
        }
        else if (this.val === "K") {
            a = "King";
        }
        else {
            a = String(this.val);
        }
        if (this.suit === "D") {
            b = "Diamonds";
        }
        else if (this.suit === "H") {
            b = "Hearts";
        }
        else if (this.suit === "C") {
            b = "Clubs";
        }
        else {
            b = "Spades";
        }
        this.title = a + " of " + b;
        if (this.suit === "D" || this.suit === "H") {
            a = "red";
        }
        else {
            a = "black"
        }
        this.colour = a;
        if (this.val === "A") {
            a = 14;
        }
        else if (this.val === "J") {
            a = 11;
        }
        else if (this.val === "Q") {
            a = 12;
        }
        else if (this.val === "K") {
            a = 13;
        }
        else {
            a = this.val;
        }
        this.rank = a;
    }
    flip() {
        if (this.faceUp) {
            this.faceUp = true;
        }
        else {
            this.faceUp = false;
        }
    }
    show() {
        this.faceUp = true;
    }
    hide() {
        this.faceUp = false;
    }
}
class Deck {
    constructor() {
        let cards = []
        const suits = ["D","H","C","S"];
        const vals = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
        for (const suit of suits) {
            for (const val of vals) {
                cards.push(new Card(suit,val));
            }
        }
        this.cards = cards;
    }
}

const card = new Card("S","A");
const deck = new Deck;

// test your classes with console.log
// to show they work as intended:
console.log(deck);


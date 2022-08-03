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
            this.faceUp = false;
        }
        else {
            this.faceUp = true;
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
    flip() {
        for (const card of this.cards) {
            card.flip();
        }
        this.cards.reverse();
    }
    deal() {
        const card = this.cards.shift();
        return card;
    }
    random() {
        const index = Math.floor(Math.random() * this.cards.length);
        console.log("Index:",index);
        const card = this.cards[index];
        this.cards.splice(index,1);
        return card;
    }
    pick(suit,val) {
        let card;
        for (let i=0;i<this.cards.length;i++) {
            if (this.cards[i].suit === suit && this.cards[i].val === val) {
                card = this.cards[i];
                this.cards.splice(i,1);
                break;
            }
        }
        return card;
    }
    cut(n) {
        let top = [];
        for (let i=0;i<n;i++) {
            top.push(this.cards.shift());
        }
        while (top.length > 0) {
            this.cards.push(top.shift());
        }
    }
    riffle() {
        const all = this.cards.length;
        const half = Math.floor(this.cards.length/2);
        let top = [];
        let bottom = [];
        for (let i=0;i<half;i++) {
            top.push(this.cards.shift());
        }
        while (this.cards.length > 0) {
            bottom.push(this.cards.shift());
        }
        for (let i=0;i<all;i++) {
            if (top.length) {
                this.cards.unshift(top.pop());
            }
            if (bottom.length) {
                this.cards.unshift(bottom.pop());
            }
        }
    }
    shuffle() {
        for (let i=0;i<4000;i++) {
            let index1 = Math.floor(Math.random() * this.cards.length);
            let index2 = Math.floor(Math.random() * this.cards.length);
            let temp = this.cards[index1];
            this.cards[index1] = this.cards[index2];
            this.cards[index2] = temp;
        }
    }
    list() {
        for (const card of this.cards) {
            console.log("Title:",card.title,"Face Up:",card.faceUp);
        }
    }
}

const card = new Card("S","A");
const deckFlip = new Deck;
const deckDeal = new Deck;
const deckRandom = new Deck;
const deckPick = new Deck;
const deckCut = new Deck;
const deckRiffle = new Deck;
const deckShuffle = new Deck;

// test your classes with console.log
// to show they work as intended:
console.log("Card: #################################");
console.log(card);
console.log("Deck: #################################");
deckFlip.list();
console.log("Deck Flip: #################################");
deckFlip.flip();
deckFlip.list();
console.log("Deck Deal: #################################");
console.log(deckDeal.deal());
deckDeal.list();
console.log("Deck Random: #################################");
console.log(deckRandom.random());
deckRandom.list();
console.log("Deck Pick: #################################");
console.log(deckPick.pick("S","A"));
deckPick.list();
console.log("Deck Cut: #################################");
deckCut.cut(10);
deckCut.list();
console.log("Deck Riffle: #################################");
deckRiffle.riffle();
deckRiffle.list();
console.log("Deck Shuffle: #################################");
deckShuffle.shuffle();
deckShuffle.list();
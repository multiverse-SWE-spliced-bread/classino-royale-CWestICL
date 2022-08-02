// write your classes:
class Die {
    constructor(sides) {
        if (sides > 3 && sides < 21) {
            this.sides = sides;
        }
        else {
            throw new Error("Sides must be greater than 3 and less than 21")
        }
    }
    roll() {
        return Math.floor(Math.random() * this.sides) + 1;
    }
}

class Cup {
    constructor(dice) {
        this.dice = [];
        for (const sides of dice) {
            this.dice.push(new Die(sides));
        }
    }
    spill() {
        let spill = [];
        for (const die of this.dice) {
            spill.push(die.roll());
        }
        return spill;
    }
}
const die1 = new Die(6);
const cup1 = new Cup([4,6,10]);

// test your classes with console.log
// to show they work as intended:
console.log("Die sides:");
console.log(die1.sides);

console.log("Die roll:");
console.log(die1.roll());
console.log(die1.roll());
console.log(die1.roll());
console.log(die1.roll());

console.log("Cup spill:");
console.log(cup1.spill());

console.log("Cup - Sides of first dice:");
console.log(cup1.dice[0].sides);

console.log("Cup - Roll third dice:");
console.log(cup1.dice[2].roll());

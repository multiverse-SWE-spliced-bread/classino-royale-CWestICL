// write your classes:
class Machine {
    constructor(costToPlay,smallPayout,bigPayout) {
        this.costToPlay = costToPlay;
        this.smallPayout = smallPayout;
        this.bigPayout = bigPayout;
    }
    spin() {
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let output = "";
        for (let i=0;i<3;i++) {
            output += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        console.log(output);
        if (output[0] === output[1] && output[0] === output[2]) {
            console.log("### Big Jackpot ###");
            return this.bigPayout;
        }
        else if (output[0] === output[1] || output[0] === output[2] || output[1] === output[2]) {
            console.log("### Small Jackpot ###");
            return this.smallPayout;
        }
        return 0;
    }
}

class Player {
    constructor(name,balance) {
        this.name = name;
        this.balance = balance;
    }
    play(machine) {
        if (this.balance >= machine.costToPlay) {
            this.balance -= machine.costToPlay;
            this.balance += machine.spin();
        }
        else {
            console.log("Insufficient funds!")
        }
    }
}

const machine1 = new Machine(500,10000,100000);
const player1 = new Player("Doc",5000);

// test your classes with console.log
// to show they work as intended:
const turns = 21;
for (i=0;i<turns;i++) {
    console.log("Turn " + i);
    player1.play(machine1);
    console.log("Balance:",player1.balance);
}

const crypto = require('crypto');

// Function to simulate a dice throw
function throwDice(dice) {
    const roll = crypto.randomInt(0, dice.length);
    return dice[roll];
}

// Function to calculate the win probability between two dice
function calculateWinProbability(dice1, dice2, trials = 10000) {
    let dice1Wins = 0;
    let dice2Wins = 0;

    for (let i = 0; i < trials; i++) {
        const roll1 = throwDice(dice1);
        const roll2 = throwDice(dice2);

        if (roll1 > roll2) {
            dice1Wins++;
        } else if (roll2 > roll1) {
            dice2Wins++;
        }
    }

    return {
        dice1WinProbability: (dice1Wins / trials) * 100,
        dice2WinProbability: (dice2Wins / trials) * 100,
    };
}

module.exports = { throwDice, calculateWinProbability };

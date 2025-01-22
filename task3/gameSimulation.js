const { throwDice } = require('./diceUtils');

// Simulate the game throws
function simulateGame(diceConfigurations, firstMove) {
    const computerDice = diceConfigurations[Math.floor(Math.random() * diceConfigurations.length)];
    const userDice = diceConfigurations[Math.floor(Math.random() * diceConfigurations.length)];

    console.log(`Computer chose dice: ${computerDice}`);
    console.log(`User chose dice: ${userDice}`);

    const computerRoll = throwDice(computerDice);
    const userRoll = throwDice(userDice);

    console.log(`Computer rolled: ${computerRoll}`);
    console.log(`User rolled: ${userRoll}`);

    if (computerRoll > userRoll) {
        console.log('Computer wins!');
    } else if (userRoll > computerRoll) {
        console.log('User wins!');
    } else {
        console.log('It\'s a tie!');
    }
}

module.exports = { simulateGame };

const Table = require('cli-table3');
const { calculateWinProbability } = require('./diceUtils');

// Function to display the help table
function displayHelpTable(diceConfigurations) {
    console.log('\nHelp Table (Probabilities of Winning):\n');
    const table = new Table({
        head: ['Dice Pair', 'Dice1 Win %', 'Dice2 Win %'],
        colWidths: [40, 15, 15],
    });

    for (let i = 0; i < diceConfigurations.length; i++) {
        for (let j = i + 1; j < diceConfigurations.length; j++) {
            const { dice1WinProbability, dice2WinProbability } = calculateWinProbability(diceConfigurations[i], diceConfigurations[j]);
            table.push([
                `[${diceConfigurations[i]}] vs [${diceConfigurations[j]}]`,
                dice1WinProbability.toFixed(2),
                dice2WinProbability.toFixed(2),
            ]);
        }
    }

    console.log(table.toString());
}

module.exports = { displayHelpTable };

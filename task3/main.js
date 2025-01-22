const { parseDiceConfigurations } = require('./parseDice');
const { determineFirstMove } = require('./hmacUtils');
const { displayHelpTable } = require('./helpTable');
const { simulateGame } = require('./gameSimulation');

// Main function to run the game
function runGame() {
    const args = process.argv.slice(2);
    const diceConfigurations = parseDiceConfigurations(args);
    const firstMove = determineFirstMove();

    if (firstMove === 'user') {
        console.log('\nUser, it\'s your turn to choose dice. Type "help" to see probabilities or select a dice number.');

        const userInput = Math.random() < 0.5 ? 'help' : '0'; // Simulated input: either 'help' or a dice index

        if (userInput === 'help') {
            displayHelpTable(diceConfigurations);
        }

        simulateGame(diceConfigurations, firstMove);
    } else {
        simulateGame(diceConfigurations, firstMove);
    }
}

runGame();

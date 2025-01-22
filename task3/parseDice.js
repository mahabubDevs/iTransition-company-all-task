// Function to parse dice configurations from command-line arguments
function parseDiceConfigurations(args) {
    if (args.length < 3) {
        console.error('Error: You must provide at least three dice configurations.');
        process.exit(1);
    }

    return args.map(arg => {
        const dice = arg.split(',').map(Number);
        if (dice.length !== 6 || dice.some(isNaN)) {
            console.error(`Error: Invalid dice configuration: ${arg}`);
            process.exit(1);
        }
        return dice;
    });
}

module.exports = { parseDiceConfigurations };

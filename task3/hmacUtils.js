const crypto = require('crypto');

// Function to generate a cryptographically secure random bit (0 or 1)
function generateRandomBit() {
    return crypto.randomInt(0, 2);
}

// Function to create an HMAC using SHA3
function createHMAC(secretKey, message) {
    const hmac = crypto.createHmac('sha3-256', secretKey);
    hmac.update(message.toString());
    return hmac.digest('hex');
}

// Function to determine the first move using HMAC
function determineFirstMove() {
    const secretKey = crypto.randomBytes(32).toString('hex');
    const randomBit = generateRandomBit();
    const hmac = createHMAC(secretKey, randomBit);

    console.log(`HMAC: ${hmac}`);
    console.log('Try to guess the random bit (0 or 1):');

    const userGuess = Math.floor(Math.random() * 2); // Simulated user input
    console.log(`Your guess: ${userGuess}`);

    console.log(`The random bit was: ${randomBit}`);
    console.log(`Secret key: ${secretKey}`);
    console.log(userGuess === randomBit ? 'You guessed it right!' : 'Better luck next time.');

    return userGuess === randomBit ? 'user' : 'computer';
}

module.exports = { determineFirstMove };

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Change this to your extracted folder path
const directoryPath = './task2';
const email = 'mdmahabubrahman800@gmail.com'.toLowerCase();

// Function to calculate SHA3-256 hash for a file
function getSHA3_256(filePath) {
    const fileBuffer = fs.readFileSync(filePath);
    return crypto.createHash('sha3-256').update(fileBuffer).digest('hex');
}

// Read files, calculate hashes, and sort them
fs.readdir(directoryPath, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    let hashes = files.map(file => getSHA3_256(path.join(directoryPath, file)));
    hashes.sort().reverse();  // Sort in descending order

    let concatenatedHash = hashes.join('') + email;
    let finalHash = crypto.createHash('sha3-256').update(concatenatedHash).digest('hex');

    console.log('Final SHA3-256:', finalHash);
});

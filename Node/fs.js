const fs = require('fs');
const path = require('path');

const folderPath = path.join(__dirname, 'demoFolder');
const filePath = path.join(folderPath, 'demoFile.txt');
const renamedFilePath = path.join(folderPath, 'renamedDemoFile.txt');

if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log('Folder created successfully using synchronous method.');
} else {
    console.log('Folder already exists.');
}

// Write the file
fs.writeFileSync(filePath, 'This is a sample text file created using fs module.');
console.log('File written successfully using synchronous method.');

// Append data
fs.appendFileSync(filePath, '\nThis is an appended line.');
console.log('Data appended successfully using synchronous method.');

// Read file
const fileData = fs.readFileSync(filePath, 'utf8');
console.log('File data read using synchronous method:\n', fileData);

// Rename file
fs.renameSync(filePath, renamedFilePath);
console.log('File renamed successfully using synchronous method.');

// Delete file
fs.unlinkSync(renamedFilePath);
console.log('File deleted successfully using synchronous method.');

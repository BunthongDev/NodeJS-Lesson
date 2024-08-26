const fs = require('fs');

// Content to write to 'output.txt'
const content = 'This is the content to be written to the file.';

// Asynchronously write content to 'output.txt'
fs.writeFile('output.txt', content, (err) => {
  if (err) {
    // Log error if writing fails
    console.error('Error writing file:', err);
    return;
  }
  // Confirm successful file write
  console.log('File has been written successfully!');
});

// Notify that file writing is in progress
console.log('Writing file asynchronously...');

const fs = require('fs');

// Asynchronously read 'example.txt' with UTF-8 encoding
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) {
    // Log error if file reading fails
    console.error('Error reading file:', err);
    return;
  }
  // Log file content if read successfully
  console.log('File content:', data);
});

// Notify that file reading is in progress
console.log('Reading file asynchronously...');

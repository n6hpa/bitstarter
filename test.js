
fs = require('fs');

text = fs.readFileSync('index.html');

console.log(text.toString());

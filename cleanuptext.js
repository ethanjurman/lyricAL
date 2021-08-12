const fs = require('fs');

const fileName = process.argv[2];

console.log({ fileName });

const data = fs.readFileSync(fileName);

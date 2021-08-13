const fs = require('fs');

const fileName = process.argv[2];

console.log({ fileName });

const removeNewlines = (str) => {
  return str.split('\n').map(strItem => strItem.trim()).filter(strItem => strItem).join(' ')
}

const splitAtPeriod = (str) => {
  return str
    .replace(/["”“]/g, '')
    .replace(/(Mr\.)/g, 'Mister')
    .replace(/(Mrs\.)/g, "Misses")
    .replace(/(Dr\.)/g, "Doctor")
    .replace(/(Ms\.)/g, "Miss")
    .replace(/(\.\.\.)/g, " (pause) ")
    .split('.')
    .filter(str => str.trim())
    .join('.\n')
}

const removePageLines = (str) => {
  return str.replace(/Page \| \d+ .*\n/gi, '')
}

const removeEmptyLines = (str) => {
  return str.split('\n').filter(str => str.trim()).join('\n');
}

const data = fs.readFileSync(fileName);
const bookString = data.toString()

const newBookString =
  splitAtPeriod(
    removeNewlines(
      removeEmptyLines(
        removePageLines(bookString)
      )
    )
  );

fs.writeFileSync('./bookTrainingData/book1.txt', newBookString)

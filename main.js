const modelPath = '/training-charRNN/models/songs/';

const addStringToPage = (str) => {
  const codeBlock = document.createElement('p');
  codeBlock.innerText = str;
  document.getElementById('results').appendChild(codeBlock);
};

const generateResult = () => {
  const seed = document.getElementById('seed').value;
  const length = document.getElementById('length').value;
  const temperature = document.getElementById('temperature').value;
  // Generate content
  const config = { seed, length, temperature };
  const rnn = ml5.charRNN(modelPath, () => console.log('loaded'));
  rnn.generate({ seed, length, temperature }, (err, results) => {
    addStringToPage(JSON.stringify(config));
    addStringToPage(results.sample);
  });
};

window.generateResult = generateResult;

const clearResults = () => {
  document.getElementById('results').innerHTML = '';
};

window.clearResults = clearResults;

const modelRNNs = {};

const getModelRNN = (modelPath) => {
  if (!modelRNNs[modelPath]) {
    modelRNNs[modelPath] = ml5.charRNN(modelPath, () => console.log('loaded'));
  }
  return modelRNNs[modelPath];
};

const addStringToPage = (str) => {
  const codeBlock = document.createElement('p');
  codeBlock.innerText = str;
  document.getElementById('results').appendChild(codeBlock);
};

const generateResult = () => {
  const seed = document.getElementById('seed').value;
  const length = document.getElementById('length').value;
  const temperature = document.getElementById('temperature').value;
  const modelPath = document.getElementById('model').value;
  // Generate content
  const config = { modelPath, seed, length, temperature };
  const rnn = getModelRNN(modelPath);
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

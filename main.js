const modelRNNsCache = {};

const getModelRNN = (modelPath) => {
  if (window.location.href.match(/localhost/)) {
    // do nothing
  } else {
    modelPath = `/lyricAL/${modelPath}`;
  }

  if (!modelRNNsCache[modelPath]) {
    modelRNNsCache[modelPath] = ml5.charRNN(modelPath, () =>
      console.log('loaded'),
    );
  }
  return modelRNNsCache[modelPath];
};

const addStringToPage = (str, style) => {
  const codeBlock = document.createElement('p');
  codeBlock.innerText = str;
  codeBlock.style.cssText = style;
  document.getElementById('results').appendChild(codeBlock);
};

const generateResult = () => {
  const seed = document.getElementById('seed').value || '\n';
  const length = document.getElementById('length').value;
  const temperature = document.getElementById('temperature').value;
  const modelPath = document.getElementById('model').value;
  // Generate content
  addStringToPage(
    'generating (this can take a bit, but should finish under a minute)',
    'color: gray;',
  );
  const config = { modelPath, seed, length, temperature };
  const rnn = getModelRNN(modelPath);
  rnn.generate({ seed, length, temperature }, (err, results) => {
    addStringToPage(JSON.stringify(config), 'color: gray;');
    addStringToPage(seed + results.sample);
  });
};

window.onload = () => {
  const rnn = getModelRNN(document.getElementById('model').value);
  rnn.generate({ seed: '\n', length: 6, temperature: 0.5 });
};

window.generateResult = generateResult;

const clearResults = () => {
  document.getElementById('results').innerHTML = '';
};

window.clearResults = clearResults;

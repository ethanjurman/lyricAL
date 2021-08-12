console.log('test');

// Create the character level generator with a pre trained model
const rnn = ml5.charRNN('/training-charRNN/models/book1/', modelLoaded);

// When the model is loaded
function modelLoaded() {
  console.log('Model Loaded!');
}

// Generate content
rnn.generate(
  { seed: 'the meaning of life is', length: 1000, temperature: 1 },
  (err, results) => {
    console.log(results.sample);
  },
);

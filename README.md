# LyricAL

A really strange project for generating lyric-like artificial data from a
learning model.

for more info: https://github.com/ml5js/training-charRNN

_A quick tip to concatenate many small disparate .txt files into one large
training file:_

```bash
ls *.txt | xargs -L 1 cat >> input.txt
```

use test_enviro as source for python

```bash
# to install virtualenv on windows using pip
py -m pip install --user virtualenv

# use python 3.6, you can reference the path as part of the command to specify which python to pull
python3 -m venv test_enviro

# to set source to the test_enviro
source test_enviro/Scripts/activate
```

## build training model

clone training-charRNN github + train model with text

```bash
git clone https://github.com/ml5js/training-charRNN

cd training-charRNN

pip install -r requirements.txt

python train.py --data_path /path/to/data/file.txt

# in training-charRNN, with test_enviro as the virtual enviroment
python train.py --data_path ../bookTrainingData/Book1.txt
```

Then you'll want to update the main.js to point to the folder where the model
was built

run python server with training model

```bash
# in lyricAL folder
python -m http.server
```

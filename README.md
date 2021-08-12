# LyricAL

A really strange project for generating lyric-like artificial data from a
learning model.

use test_enviro as source for python

```
# to install virtualenv on windows using pip
py -m pip install --user virtualenv

# to set source to the test_enviro
source test_enviro/Scripts/activate
```

build training model

```
# in training-charRNN, with test_enviro as the virtual enviroment
python train.py --data_path ../bookTrainingData/Book\ 1\ -\ The\ Philosopher\'s\ Stone.txt
```

Then you'll want to update the main.js to point to the folder where the model
was built

run python server with training model

```
# in lyricAL folder
python -m http.server
```

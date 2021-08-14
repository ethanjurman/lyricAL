// these elements bookmark the actual lyrics on AZLyrics
const ringtoneElement = document.querySelector('.ringtone');
const title = ringtoneElement.nextElementSibling;
const lyrics = title.nextElementSibling.nextElementSibling.nextElementSibling;

const noEmptyLines = (line) => line !== '';
const unique = (line, index, lines) => lines.indexOf(line) === index;
const lines = lyrics.textContent
  .split('\n')
  .filter(noEmptyLines)
  .filter(unique)
  .join('\n');
console.log(lines);

const copyToClipboard = (text) => {
  const dummy = document.createElement('textarea');
  // to avoid breaking orgain page when copying more words
  // cant copy when adding below this code
  // dummy.style.display = 'none'
  document.body.appendChild(dummy);
  //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

const copyButton = document.createElement('button');
copyButton.onclick = () => copyToClipboard(lines);
copyButton.innerHTML = 'COPY LYRICS';
ringtoneElement.append(copyButton);

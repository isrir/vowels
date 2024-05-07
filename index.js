const express = require('express');
const app = express();
app.use(express.json());

app.post('/count-vowels-consonants', (req, res) => {
  const inputString = req.body.inputString;

  const vowelCount = countVowels(inputString);
  const consonantCount = countConsonants(inputString);

  res.json({
    inputString: inputString,
    vowelCount: vowelCount,
    consonantCount: consonantCount
  });
});

function countVowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

function countConsonants(str) {
  const consonants = 'bcdfghjklmnpqrstvwxyz';
  let count = 0;

  for (let char of str.toLowerCase()) {
    if (consonants.includes(char)) {
      count++;
    }
  }

  return count;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
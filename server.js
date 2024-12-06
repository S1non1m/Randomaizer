const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Генерація випадкового числа в межах
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Вибір випадкового елемента з масиву
function getRandomElement(array) {
  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

// Рути для рандомайзера
app.get('/', (req, res) => {
  res.send('Welcome to the Randomizer API! Use /number, /element, or /string endpoints.');
});

app.get('/number', (req, res) => {
  const { min = 1, max = 100 } = req.query;
  const randomNum = getRandomNumber(Number(min), Number(max));
  res.json({ randomNumber: randomNum });
});

app.get('/element', (req, res) => {
  const { array } = req.query;
  if (!array) {
    return res.status(400).json({ error: 'Please provide an array parameter as a comma-separated string.' });
  }
  const parsedArray = array.split(',');
  const randomElem = getRandomElement(parsedArray);
  res.json({ randomElement: randomElem });
});

app.get('/string', (req, res) => {
  const length = req.query.length || 10;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomStr = '';
  for (let i = 0; i < length; i++) {
    randomStr += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  res.json({ randomString: randomStr });
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

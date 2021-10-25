const express = require('express');
const comics = require('./comics');

const app = express();

app.use(express.static('public'));

app.get('/api/comics', (req, res) => {
  res.send(JSON.stringify(comics));
});

app.listen(8080, console.log('listening 8080'));

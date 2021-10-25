const express = require('express');
const products = require('./products');

const app = express();

app.use(express.static('public'));

app.get('/api/products', (req, res) => {
  res.send(JSON.stringify(products));
});

app.listen(8080, console.log('listening 8080'));

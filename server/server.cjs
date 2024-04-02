const express = require('express');
const cors = require('cors');
const fetch = require('cross-fetch');
const helmet = require('helmet');

const app = express();

app.use(cors());
app.use(helmet());

app.get('/api/data', (req, res) => {
  fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false')
    .then(response => response.json())
    .then(data => res.json(data))
    .catch(error => console.error('Error:', error));
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
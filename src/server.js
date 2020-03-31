require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parse url-encoded query strings
app.use(bodyParser.urlencoded({extended: false}));

// parse json bodies
app.use(bodyParser.json());

app.use('/api', require('./api'));

app.get('/', (req, res) => {
  return res.send('Hello world!');
});

const PORT = process.env.PORT || 3000;
const TOKEN = process.env.SECRET_TOKEN || "don't let me find this in prod!";
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  console.log(`Your secret authorization token is ${TOKEN}`);
});

module.exports = {TOKEN};

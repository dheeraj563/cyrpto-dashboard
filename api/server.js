const express = require('express');
const path = require('path');
const axios = require("axios");
const app = express(),
      bodyParser = require("body-parser");
      port = 80;

// place holder for the data
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/data', (req, res) => {
  let url = `https://bitbns.com/jugApi/coinParams.json`;

  axios({
      method:'get',
      url
  })
  .then(function (response) {
      res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
});

app.get('/api/details', (req, res) => {
  let url = `https://bitbns.com/order/getTickerWithVolume/`;

  axios({
      method:'get',
      url
  })
  .then(function (response) {
      res.send(JSON.stringify(response.data));
  })
  .catch(function (error) {
      console.log(error);
  });
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
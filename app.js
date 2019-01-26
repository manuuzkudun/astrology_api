const express = require('express');
const app = express();
const basicData = require('./lib/basic_data.js');


app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(
    { 
      "planets": basicData.planets,
      "elements": basicData.elements,
      "signs": basicData.signs.map(function(signData){
        return {
          "name": signData[0],
          "element": basicData.elements[signData[1]]
        }
      })
    }
  ));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
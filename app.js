const express = require('express');
const app = express();
const basicData = require('./lib/basic_data.js');
const domiciles = require('./lib/domiciles.js');


app.get('/', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(
    { 
      "planets": basicData.planets,
      "elements": basicData.elements,
      "signs": basicData.signs.map(function(data){
        return {
          "name": data[0],
          "element": basicData.elements[data[1]]
        }
      }),
      "domiciles": basicData.planets.map(function(planet){
        const planetId = basicData.planets.indexOf(planet);
        return {
          "planet": planet,
          "domiciles": domiciles.data[planetId].map(function(signId) {
            return basicData.signs[signId][0]
          }).join(' y ')
        }
      })
    }
  ));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
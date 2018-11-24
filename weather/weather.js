const request = require('request');

var getWeather = (lat, long, callback) => {
  request({
    url: `https://api.forecast.io/forecast/KEY/${lat},${long}`,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather from forecast.io server');
    }
  });
};

module.exports = {
  getWeather
};

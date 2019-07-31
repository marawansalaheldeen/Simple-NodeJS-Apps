const request = require('request');
 
const url = "https://api.darksky.net/forecast/8d660b59c8a2423ac235e1ab537cc754/37.8267,-122.4233";

request({ url: url, json: true }, (error, response) => {
        console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
})
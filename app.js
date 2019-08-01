const request = require('request');
 
const url = "https://api.darksky.net/forecast/8d660b59c8a2423ac235e1ab537cc754/29.88333,31.16667";

request({ url: url, json: true }, (error, response) => {
        if(error){
                console.log("Unable to connect to weather service!")
        } else if (response.body.error){
                console.log("unable to find location")
        }else{
                console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + ' degress out. There is a ' + response.body.currently.precipProbability + '% chance of rain.')
        }  
}) 
const urls ="https://api.mapbox.com/geocoding/v5/mapbox.places/-118.23580614957541%2C34.05718784790271.json?access_token=pk.eyJ1IjoibWF0dGZpY2tlIiwiYSI6ImNqNnM2YmFoNzAwcTMzM214NTB1NHdwbnoifQ.Or19S7KmYPHW8YjRz82v6g&cachebuster=1564573995890&autocomplete=true&types=region"
request({url:urls,json:true},(error,response)=>{
        if(error){
                console.log(error)
        }else if(response.body.features.length === 0){
                console.log("wrong coordinates");
        }else{
                console.log("the longitude = "+response.body.features[0].center[0]+"\nthe latitude = "+response.body.query[1]);
        }
        
})
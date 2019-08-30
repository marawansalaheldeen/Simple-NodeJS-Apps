const express = require('express');
const geocode = require('./utils/geocode');
const forcast = require('./utils/forcast'); 
const control = require('./controller/controller');
const ejs = require('ejs');
const path    = require('path')

const app =  express();


const publicDirectoryPath = path.join(__dirname,'./public')
const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, '/templates/partials')
const port = process.env.PORT || 3000;
// Setup handlebars engine and views location
app.set('view engine','ejs');
app.set('views', viewsPath)


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.use('http://localhost:3000/',express.static(__dirname + '/public'));


const address = process.argv[2];
   
if(!address){
        console.log("please provide an address")
}else{
        geocode(address,(error,{latitude,longitude,location})=>{
                if(error){
                        return console.log(error)
                }
                
                
                
                forcast(latitude,longitude,(error,data)=>{
                        if(error){
                                return console.log(error)
                        }
                        console.log("Location : ",location);         
                        console.log("Data : ",data);
                        
                })
        })
}


const e = control(app)
app.listen(port,()=>{
        console.log(`server listening on port ${port}`);
})





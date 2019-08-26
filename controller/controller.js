const geocode = require('../utils/geocode');
const forecast = require('../utils/forcast');


module.exports = (app)=>{
    app.get('/',(req,res)=>{
        res.render('home',{
            title:"Weather App",
            name:"Marawan Salah"
        });
    })

    app.get('/weather',(req,res)=>{
        if(!req.query.address){
           return res.send({
                error:"error"
            })
        }
        geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
            if (error) {
                return res.send({ error })
            }
    
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }
    
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                })
            })
        })
    })    

    app.get('/help',(req,res)=>{
        res.render('../templates/views/help',{
            title:"Weather App",
            name:"Marawan Salah"
        });
    })

    app.get('/about',(req,res)=>{
        res.render('../templates/views/about',{
            title:"Weather App",
            name:"Marawan Salah"
        });
    })

    app.get('/',(req,res)=>{
        res.render('../templates/views/404',{
            title:"Weather App",
            name:"Marawan Salah"
        });
    })
}
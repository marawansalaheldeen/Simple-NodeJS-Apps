module.exports = (app)=>{
    app.get('/home',(req,res)=>{
        res.send("Weather app");
    })
}
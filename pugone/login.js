// JavaScript source code
const express = require('express')
const app = express()
//const router = express.Router()

const pug = require('pug')
app.set('view engine', 'pug')
app.get('/', function(req,res){
    res.render('login',
    
    { title: 'Express Pug', message: 'patience is a virtue' }
    )
});
//router.get("/", (req, res) => {
//    res.send("Welcome to Login page")
    
//})

//module.exports = router;
app.listen(2012)
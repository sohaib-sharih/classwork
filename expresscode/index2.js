const express = require('express')
const app = express();

const port = 4004;
//const login = require('./login')
//const about = require('./About')



const home = require('./home')
app.use("/home", home)

const contact = require('./contact')
app.use("/contact", contact)

const about = require('./about')
app.use("/about", about)

const login = require('./login')
app.use("/login", login)

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("hi")
    var a = 5
    console.log(a)
});

//app.get('/login.html', (req, res) => {
//    res.send('Hello World twice!')
//    console.log("hi")
//    var a = 5
//    console.log(a)


//});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});
// JavaScript source code

// JavaScript source code
const express = require('express')
const app = express()

port = 1000;

const contact = require('./contact')
app.use('/contact', contact)

//const login = require('./login')
//app.use('/login', login)

app.get('/', (req, res) => {
    res.send('Welcome to our Homepage');
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

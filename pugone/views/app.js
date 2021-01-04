const express = require('express')
const app = express();
port = 1000;

app.set = ('view engine', 'pug');
app.use = (express.static('public'));

app.get = ('/', (req, res) => {
    res.render('index.pug'),
    {
        title: 'Homepage'
    }
});

app.get = ('/about', (req, res) => {
    res.render('about.pug'),
    {
        title: 'Homepage'
    }
});
app.listen(1000, () => {
    console.log("Welcome to my crib")
});


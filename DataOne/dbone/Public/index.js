// JavaScript source code
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const mongoose = require('mongoose')
const app = express();

const port = 9999;

var mongoDB = 'mongodb://localhost/hospital';
mongoose.connect(mongoDB, {
    useNewUrlParser: true, useUnifiedTopology:
        true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'
));

app.use(Bodyparser.json());
app.use(Bodyparser.urlencoded({ extended: true }));

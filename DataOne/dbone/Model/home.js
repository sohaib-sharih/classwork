// JavaScript source code
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hme = newSchema({
    firstname: String,
    lastname: String,
    business: String,
    location: String,
    productType: String,
    ArtisanSkill: String,
    leadtime: Number,
    paymentmethod: String,
    bankaccount: Number,
})
module.exports = mongoose.model('home', hme);
// hme is the variable and home is the name of the page
console.log("results from home");
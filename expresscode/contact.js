// JavaScript source code

const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to contact page")
    //output = ("<h1> Welcome to Contact Page")
    //output += "<a href=/about> HOME </a>"
    //output += "<a href=/about> ABOUT </a>"
    //output += "<a href=/conact> CONTACT </a>"
    //output += "<a href=/about> LOGIN </a>"
    //res.send(output)
    //when you want to incorporate http address and links on the home page, repeat the process for each page, above is for home
})

module.exports = router;

var contact = "Contact us form";
var form = "Data";

console.log(contact);

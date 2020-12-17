// JavaScript source code
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to the Login Page/n Please enter your user name and password")

})

module.exports = router;
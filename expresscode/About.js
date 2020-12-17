// JavaScript source code
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to About Us Page \nHow can we help you?")
})
module.exports = router;
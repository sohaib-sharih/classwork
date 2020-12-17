// JavaScript source code
const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
    res.send("Welcome to Hunarmund/n www.hunarmund.com");
})
module.exports = router;
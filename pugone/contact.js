// JavaScript source code
const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send("Hi, welcome to Contact Page")
});

module.exports = router;
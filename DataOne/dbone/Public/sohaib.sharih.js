// JavaScript source code
var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
//require database
home = require('./model/home.js')

router.post('/', function (req, res) {
    var tesData = req.body; //Get the parsed information

    if (!tesData.name || !tesData.lsname) {
        res.render('show_message', {
            message: "Sorry, you provided worng info", type: "error"
        });
    } else {
        console.log(tesData);
        var newHomeAdd = new Home({
            //name: req.body.name,
            //lsname: req.body.lsname,
            firstname: req.body.name,
            lastname: req.body.lsname,
        });
        console.log(newHomeAdd);
        newHomeAdd.save(function (err, result) {
            if (err)
                console.log("err ");
            else
                console.log("sucess ");
        });
    }
});
//});
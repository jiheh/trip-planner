'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotels = models.Hotel;


router.get('/', function(req,res,next) {
  Hotels.findAll()
        .then(function(hotels){
            res.render('index', {Hotels: hotels});
        });
});

module.exports = router;

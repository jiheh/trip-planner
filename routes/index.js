'use strict';
var express = require('express');
var router = express.Router();
var models = require('../models');
var Hotels = models.Hotel;
var Restaurants = models.Restaurant;
var Activities = models.Activity;


router.get('/', function(req, res, next) {
	Promise.all([Hotels.findAll(), Restaurants.findAll(), Activities.findAll()])
	.then(function(values){
		res.render('index', {
			Hotels: values[0],
			Restaurants: values[1],
			Activities: values[2]
		});
	})
	.catch(next);
});

module.exports = router;

var Sequelize = require('sequelize');
var db = require('./db');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.DECIMAL,
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.STRING,
		allowNull: true
	}
});


module.exports = Hotel;
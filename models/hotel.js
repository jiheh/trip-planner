var Sequelize = require('sequelize');
var db = require('./db');

var Hotel = db.define('hotel', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	num_stars: {
		type: Sequelize.RANGE(Sequelize.INTEGER),
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	},
	amenities: {
		type: Sequelize.ARRAY(Sequelize.STRING),
		allowNull: true
	}
});


module.exports = Hotel;
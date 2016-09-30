var Sequelize = require('sequelize');
var db = require('./db');

var Restaurant = db.define('restaurant', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING,
		allowNull: false
	},
	price: {
		type: Sequelize.DECIMAL,
		allowNull: false,
		validate: {
			min: 1,
			max: 5
		}
	}
});

module.exports = Restaurant;

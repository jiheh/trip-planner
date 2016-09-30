var Sequelize = require('sequelize');
var db = require('./db');


var Place = db.define('place', {
	address: {
		type: Sequelize.STRING,
		allowNull: false
	},
	city: {
		type: Sequelize.STRING,
		allowNull: false		
	},
	state: {
		type: Sequelize.STRING(2),
		allowNull: false
	},
	phone: {
		type: Sequelize.STRING(14),
		allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.DOUBLE),
		allowNull: false
	}
});


module.exports = Place;
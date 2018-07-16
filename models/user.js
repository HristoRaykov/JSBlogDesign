const Sequelize = require('sequelize');

module.exports = function (sequilize,DataType) {
	const User = sequilize.define('User', {
		email: {
			type: Sequelize.STRING,
			required: true,
			uniqe: true,
			allowNull: false
		},
		passwordHash: {
			type: Sequelize.STRING,
			required: true
		},
		fullName: {
			type: Sequelize.STRING,
			required: true
		},
		salt: {
			type: Sequelize.STRING,
			required: true
		},
	}, {
		timestamps: false
	});
	
	return User;
};
const Sequelize = require('sequelize');
const DbConfig = require('../db/DbConfig.js');
const Trope = require('./Trope.js');

module.exports = DbConfig.db.define('book', {
    id: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true},
    name: { type: Sequelize.STRING, allowNull: false, unique: true},
    description: { type: Sequelize.STRING, allowNull: false, unique: true},
    trope_id: { type: Sequelize.INTEGER, allowNull: false, unique: true, }
})
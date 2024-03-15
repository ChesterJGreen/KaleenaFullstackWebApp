const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
   return sequelize.define('emails', {
      id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true},
      email: { type: DataTypes.STRING, validate: {max:255}, allowNull: false},
      name: { type: DataTypes.STRING, validate: {max: 255}, allowNull: false},
      unsubscribe: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false},
      isValidated: { type: DataTypes.BOOLEAN, defaultValue: false, allowNull: false}

}, { freezeTableName: true, timestamps: true});
}
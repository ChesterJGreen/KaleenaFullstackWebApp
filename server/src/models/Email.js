const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory')

module.exports = (sequelize, DataTypes) => {

 const Email = sequelize.define('emails', {
       id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       email: { type:DataTypes.STRING, validate: {max:255}},
       name: { type:DataTypes.STRING, validate: {max:255}},
       unsubscribe: { type:DataTypes.BOOLEAN, validate: {max:255}}
   }, { tableName: 'emails'});
}
   async() => {await sequelize.sync();}


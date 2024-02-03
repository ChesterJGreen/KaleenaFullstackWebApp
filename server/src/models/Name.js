const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory')

module.exports = (sequelize, DataTypes) => {

 const Name = sequelize.define('names', {
       id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       first_name: { type:DataTypes.STRING, validate: {max:255}},
       last_name: { type:DataTypes.STRING, validate: {max:255}}
   }, { tableName: 'names'});
}
   async() => {await sequelize.sync();}


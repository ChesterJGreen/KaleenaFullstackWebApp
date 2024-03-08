const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('sqlite::memory')
const db = require('../db/DbConfig.js')
module.exports = (sequelize, DataTypes) => {

 const Email = db.db.define("emails", {
       id:{ type: DataTypes.INTEGER , primaryKey:true, autoIncrement: true, allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       email: { type:DataTypes.STRING, validate: {max:255}},
       name: { type:DataTypes.STRING, validate: {max:255}},
       unsubscribe: { type:DataTypes.ENUM('true', 'false'), validate: {max:255}}
      }, { freezeTableName: false, timestamps: true });
      module.exports = Email
    }
{
   db.db.models.Email.has(sequelize.define(models.Name))
}

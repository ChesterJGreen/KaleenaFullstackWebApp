const { Types } = require('mysql2');
const {DataTypes, Model, Sequelize} = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

module.exports = (sequelize, DataTypes) => {
 const Trope = sequelize.define('tropes', {
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    content: { type:DataTypes.TEXT, validate: { max: 255}
    }
})
}
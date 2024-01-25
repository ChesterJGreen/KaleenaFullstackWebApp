const Book = require("./Book.js")

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
   })
   Series.belongsToMany(Book)
}
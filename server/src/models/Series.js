const Book = require("./Book.js")
const Image = require("./Image.js")

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}}
    }, { freezeTableName: false, timestamps: true})
   Series.associate = function(models) {
   Series.belongsToMany(sequelize.define(models.Book))
   Series.hasMany(sequelize.define(models.Book)),
   Series.has(sequelize.define(models.Image))
}
return Series
}
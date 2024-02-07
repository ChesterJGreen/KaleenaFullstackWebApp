const Extra = require("./Extra.js")
const Image = require("./Image.js")

module.exports = (sequelize, DataTypes) => {
    const Recipe = sequelize.define('recipes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}}
    }, { freezeTableName: false, timestamps: true})
   Recipe.associate = function(models) {
   Recipe.belongsTo(sequelize.define(models.Extra)),
   Recipe.belongsToMany(sequelize.define(models.Image)),
   Recipe.hasMany(sequelize.define(models.Image))
}
return Recipe
}
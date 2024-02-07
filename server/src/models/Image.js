const Book = require("./Book.js")
const Character = require("./Character.js")
const Note = require("./Note.js")
const Playlist = require("./Playlist.js")
const Recipe = require("./Recipe.js")

module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('images', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('image', 'icon', 'map', 'pdf', 'photo', 'background'), validate: { max: 25}},
    }, { freezeTableName: false, timestamps: true });
   Image.associate = function(models) {
    Image.belongsToMany(sequelize.define(models.Playlist)),
   Image.belongsToMany(sequelize.define(models.Recipe)),
   Image.belongsToMany(sequelize.define(models.Note)),
   Image.belongsTo(sequelize.define(models.Character)),
   Image.belongsTo(sequelize.define(models.Book))
}
return Image
}
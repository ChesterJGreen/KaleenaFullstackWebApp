const { Sequelize } = require("sequelize")
const Book = require("./Book.js")
const Link = require("./Link.js")
const Note = require("./Note.js")
const Playlist = require("./Playlist.js")
const Recipe = require("./Recipe.js")
const DeletedScene = require("./DeletedScene.js")

module.exports = (sequelize, DataTypes) => {
    const Extra = sequelize.define('extras', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       description: { type:DataTypes.TEXT},
       book_id: { type:DataTypes.INTEGER, references: {model: Book, key: 'id'}},
       recipes_id: { type:DataTypes.INTEGER, references: {model: Recipe, key: 'id'}},
       links_id: { type:DataTypes.INTEGER, references: {model: Link, key: 'id'}},
       notes_id: { type:DataTypes.INTEGER, references: {model: Note, key: 'id'}},
       playlists_id: { type:DataTypes.INTEGER, references: {model: Playlist, key: 'id'}},
       deleted_scenes_id: { type:DataTypes.INTEGER, references: { model: DeletedScene, key:'id'}}
    }, { freezeTableName: false, timestamps: true });
Extra.associate = function(models) {
   Extra.belongsTo(sequelize.define(models.Book)),
   Extra.belongsToMany(sequelize.define(models.DeletedScene)),
   Extra.hasMany(sequelize.define(models.DeletedScene)),
   Extra.belongsTo(sequelize.define(models.Playlist)),
   Extra.belongsToMany(sequelize.define(models.Recipe)),
   Extra.hasMany(sequelize.define(models.Recipe)),
   Extra.belongsToMany(sequelize.define(models.Link)),
   Extra.hasMany(sequelize.define(models.Link)),
   Extra.belongsToMany(sequelize.define(models.Note)),
   Extra.hasMany(sequelize.define(models.Note))
};
return Extra
}
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
       recipes_id: { type:DataTypes.ARRAY, references: {model: Recipe, key: 'id'}},
       links_id: { type:DataTypes.ARRAY, references: {model: Link, key: 'id'}},
       notes_id: { type:DataTypes.ARRAY, references: {model: Note, key: 'id'}},
       playlists_id: { type:DataTypes.ARRAY, references: {model: Playlist, key: 'id'}}
   })
   Extra.belongsTo(Book)
   Extra.belongsToMany(DeletedScene)
   Extra.belongsTo(Playlist)
   Extra.belongsToMany(Recipe)
   Extra.belongsToMany(Link)
   Extra.belongsToMany(Note)
   


}
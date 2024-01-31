const Extra = require("./Extra.js")
const Image = require("./Image.js")
const Song = require("./Song.js")

module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('playlists', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
       songs_id: { type:DataTypes.ARRAY, references: {model: Song, key: 'id'}}
   })
   Playlist.belongsTo(Extra)
   Playlist.belongsToMany(Song)
   Playlist.hasMany(Song)
   Playlist.belongsTo(Image)
}
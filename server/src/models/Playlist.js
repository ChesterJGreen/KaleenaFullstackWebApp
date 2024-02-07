const Extra = require("./Extra.js")
const Image = require("./Image.js")
const Song = require("./Song.js")

module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('playlists', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}},
       songs_id: { type:DataTypes.INTEGER, references: {model: Song, key: 'id'}},
       position_in_playlist: { type: DataTypes.INTEGER, validate: {max: 255}}
    }, { freezeTableName: false, timestamps: true})
   Playlist.associate = function(models) {
   Playlist.belongsTo(sequelize.define(models.Extra))
   Playlist.belongsToMany(sequelize.define(models.Song)),
   Playlist.hasMany(sequelize.define(models.Song)),
   Playlist.belongsTo(sequelize.define(models.Image))
}
return Playlist
}
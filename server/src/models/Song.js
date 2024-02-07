const Playlist = require("./Playlist.js")

module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('songs', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       artist: { type:DataTypes.STRING, validate: {max:255}},
       position_in_playlist: { type:DataTypes.INTEGER, validate: {max:255}}
    }, { freezeTableName: false, timestamps: true})
   Song.associate = function(models) {
   Song.belongsToMany(sequelize.define(models.Playlist))
}
return Song
}
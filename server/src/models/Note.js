const Image = require("./Image.js")

module.exports = (sequelize, DataTypes) => {
    const Note = sequelize.define('notes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       header: { type:DataTypes.STRING, validate: {max:255}},
       content: { type:DataTypes.TEXT},
       images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}}
    }, { freezeTableName: false, timestamps: true})
   Note.associate = function(models) {
    Note.has(sequelize.define(models.Image)),
   Note.belongsTo(sequelize.define(models.Extra))
}
return Note
}
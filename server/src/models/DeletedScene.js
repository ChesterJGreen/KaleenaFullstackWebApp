const Extra = require("./Extra.js")

module.exports = (sequelize, DataTypes) => {
    const DeletedScene = sequelize.define('deleted_scenes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       content: { type:DataTypes.TEXT, validate: {max:255}},
       chapter_number: { type:DataTypes.INTEGER},
    }, { freezeTableName: false, timestamps: true });
   DeletedScene.associate = function(models) {
       DeletedScene.belongsTo(sequelize.define(models.Extra))
    }
    return DeletedScene
}



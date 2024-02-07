const Extra = require("./Extra.js")

module.exports = (sequelize, DataTypes) => {
    const Link = sequelize.define('links', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('youtube', 'pinterest', 'spotify', 'other'), validate: { max: 25}},
   }, { freezeTableName: false, timeStamps: true })
   Link.associate = function(models) {
   Link.belongsToMany(sequelize.define(models.Extra))
}
return Link
}

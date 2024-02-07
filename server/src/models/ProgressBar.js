const Book = require("./Book.js")

module.exports = (sequelize, DataTypes) => {
    const ProgressBar = sequelize.define('progress_bars', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       release_date:{ type:DataTypes.DATE, validate: { max:255 }},
       completetion_date:{ type:DataTypes.DATE, validate: { max:255 }},
       percent_complete: { type:DataTypes.DOUBLE, validate: {max:255}}
    }, { freezeTableName: false, timestamps: true})
   ProgressBar.associate = function(models) {
    ProgressBar.belongsTo(sequelize.define(models.Book))
}
return ProgressBar
}
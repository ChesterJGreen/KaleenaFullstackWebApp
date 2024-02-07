
module.exports = (sequelize, DataTypes) => {
 const Trope = sequelize.define('tropes', {
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    content: { type:DataTypes.TEXT, validate: { max: 255}
    }
}, { freezeTableName: false, timestamps: true})
Trope.associate = function(models) {
Trope.belongsTo(sequelize.define(models.Book))
}
return Trope
}
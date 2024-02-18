const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')


class Trope extends Model {
    content;
}
Trope.init({
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true, primaryKey: true, autoIncrement: true},
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    content: { type:DataTypes.TEXT, validate: { max: 255}
    }
}, { sequelize, modelName: 'Trope'})
Trope.associate = function(models) {
Trope.belongsTo(models.Book)
}
const trope = new Trope();

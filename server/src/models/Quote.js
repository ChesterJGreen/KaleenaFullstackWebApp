const Book = require("./Book.js")
const Character = require("./Character.js")

module.exports = (sequelize, DataTypes) => {
    const Quote = sequelize.define('quotes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('character','book'), validate: { max: 255}},
    }, { freezeTableName: false, timestamps: true})
   Quote.associate = function(models) {
   Quote.belongsTo(sequelize.define(models.Character)),
   Quote.belongsTo(sequelize.define(models.Book))
   }
   return Quote
}
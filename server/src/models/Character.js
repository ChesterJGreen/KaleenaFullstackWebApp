const Quote = require("./Quote.js")
const Image = require("./Image.js")
const Name = require("./Name.js")

module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('characters', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true},
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       sex: { type:DataTypes.ENUM('male','female'), validate: { max: 255}},
       age: { type:DataTypes.INTEGER},
       names_id: { type: DataTypes.INTEGER, references: {model: Name, key: 'id'}},
       images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}},
       quotes_id: { type: DataTypes.INTEGER, references: {model: Quote, key: 'id'}}
    }, { freezeTableName: false, timestamps: true });
   Character.associate = function(models) {
   Character.belongsToMany(sequelize.define(models.Book)),
   Character.has(sequelize.define(models.Quote)),
   Character.has(sequelize.definte(models.Image))
   };
   return Character
}
   
const Quote = require("./Quote.js")
const Image = require("./Image.js")
const Book = require("./Book.js")

module.exports = (sequelize, DataTypes) => {
    const Character = sequelize.define('characters', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true},
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       sex: { type:DataTypes.ENUM('male','female'), validate: { max: 255}},
       age: { type:DataTypes.INTEGER},
       full_name: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
       quotes_id: { type: DataTypes.ARRAY, references: {model: Quote, key: 'id'}}
   })
   Character.belongsToMany(Book)
   Character.belongsTo(Quote)
   Character.belongsTo(Image)
}
   
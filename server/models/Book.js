const Trope = require('./Trope.js');
const Image = require('./Image.js');
const Character = require('./Character.js');
const Series = require('./Series.js');
const Extras = require('./Extra.js');
const ProgressBars = require('./ProgressBar.js');
const Quote = require('./Quote.js');
const Extra = require('./Extra.js');
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:')

// module.exports = (sequelize, DataTypes) => {
const Book = sequelize.define('book', {
    id:{ type:DataTypes.INTEGER, allowNull: false, unique:true},
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    title:{ type:DataTypes.TEXT},
    hook:{ type:DataTypes.TEXT},
    short_description:{ type:DataTypes.TEXT},
    tagline:{ type:DataTypes.STRING, validate: {max:255}},
    theme:{ type:DataTypes.STRING},
    trope_id: { type:DataTypes.ARRAY, references: { model: Trope, key: 'id'}},
    characters_id: { type:DataTypes.ARRAY, references: { model: Character, key: 'id'}},
    images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
    series_id: { type:DataTypes.ARRAY, references: {model: Series, key: 'id'}},
    progress_id: { type:DataTypes.ARRAY, references: {model: ProgressBars, key: 'id'} },
    quotes_id: { type:DataTypes.ARRAY, references: {model: Quote, key: 'id'}},
    extras_id: { type:DataTypes.ARRAY, references: {model: Extras, key: 'id'}}
});
Book.belongsTo(Extra)
Book.belongsToMany(Trope)
Book.hasMany(Trope)
Book.belongsToMany(Character)
Book.hasMany(Character)
Book.belongsToMany(Image)
Book.belongsTo(Series)
Book.belongsTo(ProgressBars)
Book.belongsTo(Quote)

// }

   
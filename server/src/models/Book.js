const Trope = require('../models/Trope.js');
const Image = require('./Image.js');
const Character = require('./Character.js');
const Series = require('./Series.js');
const ProgressBars = require('./ProgressBar.js');
const Quote = require('./Quote.js');
const Extra = require('./Extra.js');

module.exports = (sequelize, DataTypes) => {
const Book = sequelize.define('books', {
    id:{ type: DataTypes.INTEGER, allowNull: false, unique:true, primaryKey: true, autoIncrement: true},
    title:{ type:DataTypes.TEXT},
    hook:{ type:DataTypes.TEXT},
    short_description:{ type:DataTypes.TEXT},
    tagline:{ type:DataTypes.STRING, validate: {max:255}},
    theme:{ type:DataTypes.STRING},
    tropes_id: { type:DataTypes.INTEGER, references: { model: Trope, key: 'id'}},
    characters_id: { type:DataTypes.INTEGER, references: { model: Character, key: 'id'}},
    images_id: { type:DataTypes.INTEGER, references: {model: Image, key: 'id'}},
    series_id: { type:DataTypes.INTEGER, references: {model: Series, key: 'id'}},
    progressbars_id: { type:DataTypes.INTEGER, references: {model: ProgressBars, key: 'id'} },
    quotes_id: { type:DataTypes.INTEGER, references: {model: Quote, key: 'id'}},
    extras_id: { type:DataTypes.INTEGER, references: {model: Extra, key: 'id'}}
}, { freezeTableName: false, timestamps: true });
Book.associate = function(models) {
    Book.has(sequelize.define(models.Extra)),
    Book.hasMany(sequelize.define(models.Trope)),
    Book.hasMany(sequelize.define(models.Character)),
    Book.hasMany(sequelize.define(models.Image)),
    Book.has(sequelize.define(models.Series)),
    Book.has(sequelize.define(models.ProgressBars)),
    Book.hasMany(sequelize.define(models.Quote))
};
return Book
};

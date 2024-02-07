const Trope = require('../models/Trope.js');
const Image = require('./Image.js');
const Character = require('./Character.js');
const Series = require('./Series.js');
const Extras = require('./Extra.js');
const ProgressBars = require('./ProgressBar.js');
const Quote = require('./Quote.js');
const Extra = require('./Extra.js');
const { Sequelize } = require('sequelize');
const e = require('express');
const sequelize = new Sequelize('sqlite::memory:')
const DbConfig = require('../db/DbConfig.js');

module.exports = (sequelize, DataTypes) => {
const Book = sequelize.define('book', {
    id:{ type: Sequelize.INTEGER, allowNull: false, unique:true, primaryKey: true, autoIncrement: true},
    title:{ type:Sequelize.TEXT},
    hook:{ type:Sequelize.TEXT},
    short_description:{ type:Sequelize.TEXT},
    tagline:{ type:Sequelize.STRING, validate: {max:255}},
    theme:{ type:Sequelize.STRING},
    tropes_id: { type:Sequelize.INTEGER, references: { model: Trope, key: 'id'}},
    characters_id: { type:Sequelize.INTEGER, references: { model: Character, key: 'id'}},
    images_id: { type:Sequelize.INTEGER, references: {model: Image, key: 'id'}},
    series_id: { type:Sequelize.INTEGER, references: {model: Series, key: 'id'}},
    progressbars_id: { type:Sequelize.INTEGER, references: {model: ProgressBars, key: 'id'} },
    quotes_id: { type:Sequelize.INTEGER, references: {model: Quote, key: 'id'}},
    extras_id: { type:Sequelize.INTEGER, references: {model: Extras, key: 'id'}}
},
{
        freezeTableName: false,
        timestamps: true
    
});
Book.associate = function(models) {
    Book.has(sequelize.define(Extra)),
    Book.hasMany(sequelize.define(Trope)),
    Book.hasMany(sequelize.define(Character)),
    Book.hasMany(sequelize.define(Image)),
    Book.has(sequelize.define(Series)),
    Book.has(sequelize.define(ProgressBars)),
    Book.hasMany(sequelize.define(Quote))
};
return Book
};

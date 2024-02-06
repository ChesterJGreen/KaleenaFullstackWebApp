const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const models = [
    require('../models/Book.js'),
    require('../models/Character.js'),
    require('../models/DeletedScene.js'),
    require('../models/Email.js'),
    require('../models/Extra.js'),
    require('../models/Image.js'),
    require('../models/Link.js'),
    require('../models/Name.js'),
    require('../models/Note.js'),
    require('../models/Playlist.js'),
    require('../models/ProgressBar.js'),
    require('../models/Quote.js'),
    require('../models/Recipe.js'),
    require('../models/Series.js'),
    require('../models/Song.js'),
    require('../models/Trope.js')
].map(m=>m(sequelize));

module.exports = { sequelize, models }

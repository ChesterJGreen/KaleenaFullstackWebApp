const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')

const allModels = [
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
].map(() =>(sequelize));

module.exports = { sequelize, allModels }

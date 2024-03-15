const { Sequelize }  = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')
const EmailModel = require('../models/Email.js')

const databaseConnection = new Sequelize(
  'kaleenas_WebsiteDB',
  'kaleenas_cjgreenie',
  'Whistlewhileyouwork#1', {
    host:'162.241.194.204',
    dialect:'mysql',
  },
  
);

const Email = EmailModel(databaseConnection)

const models = [
  require('../models/Email.js')
].map(m=>m(sequelize));

module.exports = { Email }

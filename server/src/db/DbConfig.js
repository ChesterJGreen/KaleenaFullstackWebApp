const DbConfig = require('../../src/config.js').database.db
const { Sequelize }  = require('sequelize')
const sequelize = new Sequelize('sqlite::memory:')
const EmailModel = require('../models/Email.js')

const databaseConnection = new Sequelize(DbConfig.name, DbConfig.user, DbConfig.password, {
    dialect: DbConfig.dialect,
    host: DbConfig.host,
    port: DbConfig.port,
    define: { timestamps: false}
  },
  
);

const Email = EmailModel(databaseConnection)

const models = [
  require('../models/Email.js')
].map(m=>m(sequelize));

module.exports = { Email }

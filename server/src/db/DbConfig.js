import mongoose from 'mongoose'
import { Sequelize } from 'sequelize'
import { logger } from '../utils/Logger'

export const sequelize = new Sequelize(
  'kaleenas_WebsiteDB',
  'kaleenas_cjgreenie',
  'Whistlewhileyouwork#1', {
    dialect:'mysql',
    host:'162.241.194.204'
  }

);

const connectToDb = async ()=>{
  try{
    await sequelize.authenticate();
    console.log("Successfully connected to the db");
  }
  catch(error){
    console.log(error);
  }
}

module.exports = { sequelize, connectToDb }
// mongoose.connection.on('error', err => {
//   logger.error('[DATABASE ERROR]:', err)
// })
// mongoose.connection.on('connection', () => {
//   logger.log('DbConnection Successful')
// })

// mongoose.set('strictQuery', false)

// export class DbConnection {
//   static async connect(connectionstring = process.env.CONNECTION_STRING || '') {
//     const status = 0
//     try {
//       if (!connectionstring) {
//         return logger.warn('Db not available, no CONNECTION_STRING')
//       }
//       const status = await sequelize.connect(connectionstring)
//       logger.log('[CONNECTION TO DB SUCCESSFUL]')
//       return status
//     } catch (e) {
//       logger.error(
//         '[Sequelize CONNECTION ERROR]:',
//         'Invalid connection string'
//       )
//       return status
//     }
//   }
// }

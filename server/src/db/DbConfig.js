const { Sequelize } = require('sequelize');
const db = new Sequelize(
  'kaleenas_WebsiteDB',
  'kaleenas_cjgreenie',
  'Whistlewhileyouwork#1', {
    host:'162.241.194.204',
    dialect:'mysql',
  }

);

const connectToDb = async ()=>{
  try{
    await db.authenticate();
    console.log("Successfully connected to the db");
  }
  catch(error){
    console.log(error);
  }
}
connectToDb();
module.exports = { db }
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

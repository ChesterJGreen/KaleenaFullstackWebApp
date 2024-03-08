const { Sequelize } = require('sequelize');
const db = new Sequelize(
  'kaleenas_WebsiteDB',
  'kaleenas_cjgreenie',
  'Whistlewhileyouwork#1', {
    host:'162.241.194.204',
    dialect:'mysql',
  }
);

const dbConnection = async ()=>{
  try{
    await db.authenticate();
    console.log("Successfully connected to the db");
  }
  catch(error){
    console.log(error);
  }
}
dbConnection();
module.exports = { db, dbConnection }

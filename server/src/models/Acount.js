
module.exports = (sequelize, DataTypes) => {

    const Account = sequelize.define('accounts', {
          id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement: true, allowNull: false, unique:true },
          create_date:{ type:DataTypes.DATE, validate: { max:255 }},
          update_date:{ type:DataTypes.DATE, validate: { max:255 }},
          email: { type:DataTypes.STRING, validate: {max:255}},
          name: { type:DataTypes.STRING, validate: {max:255}},
         }, { freezeTableName: false, timestamps: true });
     Account.associate = function(models) {
      Account.has(sequelize.define(models.Name))
     }
     return Account
   }
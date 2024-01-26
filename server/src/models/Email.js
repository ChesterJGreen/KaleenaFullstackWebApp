module.exports = (sequelize, DataTypes) => {
    const Email = sequelize.define('emails', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       email: { type:DataTypes.STRING, validate: {max:255}},
       first_name: { type:DataTypes.STRING, validate: {max:255}},
       last_name: { type:DataTypes.STRING, validate: {max:255}},
       unsubscribe: { type:DataTypes.BOOLEAN, validate: {max:255}}
   })
}
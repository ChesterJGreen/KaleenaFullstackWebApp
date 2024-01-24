
module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define('images', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('image', 'icon', 'map', 'pdf', 'photo'), validate: { max: 25}},
   })
}
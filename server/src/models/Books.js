const {sequelize} = require('../db/DbConfig.js')
const {DataTypes} = require('sequelize');


sequelize.define('Book', {
    id:{
        type:DataTypes.INTEGER
    },
    title:{
        type:DataTypes.STRING,
        validate: {
            max:150
        }
    },


})
// export const ValueSchema = new Schema(
//   {
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     creatorId: { type: Schema.Types.ObjectId, ref: 'Profile', required: true }
//   },
//   { timestamps: true, toJSON: { virtuals: true } }
// )

// ValueSchema.virtual('creator', {
//   localField: 'creatorId',
//   foreignField: '_id',
//   justOne: true,
//   ref: 'Profile'
// })

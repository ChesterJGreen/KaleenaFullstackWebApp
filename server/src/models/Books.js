const {sequelize} = require('../db/DbConfig.js')
const {DataTypes} = require('sequelize');


sequelize.define('Book', {
    id:{
        type:DataTypes.INTEGER
    },
    title:{
        type:DataTypes.TEXT,
        validate: {
            max:150
        }
    },
    icon1:{
        type:DataTypes.STRING
    },
    icon2:{
        type:DataTypes.STRING
    },
    numberInSeries:{
        type:DataTypes.INTEGER
    },
    characterNames:{
        type:DataTypes.ARRAY
    },
    tropes:{
        type:DataTypes.ARRAY
    },
    seriesTitle:{
        type:DataTypes.STRING
    },
    image:{
        type:DataTypes.STRING
    },
    hook:{
        type:DataTypes.TEXT
    },
    shortDescription:{
        type:DataTypes.TEXT
    },
    tagline:{
        type:DataTypes.STRING
    },
    femaleBookLine:{
        type:DataTypes.TEXT
    },
    femaleImage:{
        type:DataTypes.STRING
    },
    femaleName:{
        type:DataTypes.STRING
    },
    maleBookLine:{
        type:DataTypes.TEXT
    },
    maleImage:{
        type:DataTypes.STRING
    },
    maleName:{
        type:DataTypes.STRING
    },
    quote:{
        type:DataTypes.TEXT
    },
    theme:{
        type:DataTypes.STRING
    },
    bookQuoteReference:{
        type:DataTypes.STRING
    },
    map:{
        type:DataTypes.STRING
    },
    characterQuote:{
        type:DataTypes.TEXT
    },
    progressPercent: {
        type:DataTypes.INTEGER
    },
    releaseDate:{
        type:DataTypes.DATE
    }
    

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

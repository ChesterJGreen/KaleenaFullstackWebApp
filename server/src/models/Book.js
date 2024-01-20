const { Types } = require('mysql2');
const {DataTypes, Model, Sequelize} = require('sequelize');
const sequelize = new Sequelize("sqlite::memory:");

const Book = sequelize.define('book', {
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
    create_date:{ type:DataTypes.TEXT, validate: { max:255 }},
    icon1:{ type:DataTypes.STRING, allowNull: false },
    icon2:{ type:DataTypes.STRING, allowNull: true },
    numberInSeries:{ type:DataTypes.INTEGER, allowNull:true },
    characterNames:{ type:DataTypes.ARRAY(DataTypes.STRING)},
    tropes:{ type:DataTypes.ARRAY },
    seriesTitle:{ type:DataTypes.STRING },
    image:{ type:DataTypes.STRING },
    hook:{ type:DataTypes.TEXT},
    shortDescription:{ type:DataTypes.TEXT },
    tagline:{ type:DataTypes.STRING },
    femaleBookLine:{ type:DataTypes.TEXT },
    femaleImage:{ type:DataTypes.STRING },
    femaleName:{ type:DataTypes.STRING },
    maleBookLine:{ type:DataTypes.TEXT },
    maleImage:{ type:DataTypes.STRING },
    maleName:{ type:DataTypes.STRING },
    quote:{ type:DataTypes.TEXT },
    theme:{ type:DataTypes.STRING },
    bookQuoteReference:{ type:DataTypes.STRING }  ,
    map:{ type:DataTypes.STRING },
    characterQuote:{ type:DataTypes.TEXT },
    progressPercent: { type:DataTypes.INTEGER },
    releaseDate:{ type:DataTypes.DATE }
});
(async ()=> {
    await sequelize.sync()
})();

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

const Trope = require('./Trope.js');
const Image = require('./Image.js');
const Character = require('./Character.js');
const Series = require('./Series.js');
const Extras = require('./Extra.js');
const ProgressBars = require('./ProgressBar.js');
const Quote = require('./Quote.js');
const Extra = require('./Extra.js');
const Book = require('./Book.js');
const DeletedScene = require('./DeletedScene.js');
const Playlist = require('./Playlist.js');
const Recipe = require('./Recipe.js');
const Link = require('./Link.js');
const Note = require('./Note.js');
const Song = require('./Song.js');
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize("sqlite::memory");


sequelize.define('characters', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       sex: { type:DataTypes.ENUM('male','female'), validate: { max: 255}},
       age: { type:DataTypes.INTEGER},
       full_name: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
       quotes_id: { type: DataTypes.ARRAY, references: {model: Quote, key: 'id'}}
   })
 
sequelize.define('deleted_scenes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       content: { type:DataTypes.STRING, validate: {max:255}},
       chapter_number: { type:DataTypes.INTEGER},
   })

sequelize.define('extras', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       description: { type:DataTypes.TEXT},
       book_id: { type:DataTypes.INTEGER, references: {model: Book, key: 'id'}},
       recipes_id: { type:DataTypes.ARRAY, references: {model: Recipe, key: 'id'}},
       links_id: { type:DataTypes.ARRAY, references: {model: Link, key: 'id'}},
       notes_id: { type:DataTypes.ARRAY, references: {model: Note, key: 'id'}},
       playlists_id: { type:DataTypes.ARRAY, references: {model: Playlist, key: 'id'}}
   })
  sequelize.define('images', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('image', 'icon', 'map', 'pdf', 'photo'), validate: { max: 25}},
   })
sequelize.define('links', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('youtube', 'pinterest', 'spotify', 'other'), validate: { max: 25}},
   })
sequelize.define('notes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       header: { type:DataTypes.STRING, validate: {max:255}},
       description: { type:DataTypes.TEXT},
       images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}}
   })

sequelize.define('playlists', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
       songs_id: { type:DataTypes.ARRAY, references: {model: Song, key: 'id'}}
   })
sequelize.define('progress_bars', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       release_date:{ type:DataTypes.DATE, validate: { max:255 }},
       completetion_date:{ type:DataTypes.DATE, validate: { max:255 }},
       progress: { type:DataTypes.DOUBLE, validate: {max:255}}
   })
sequelize.define('quotes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.STRING, validate: {max:255}},
       type: { type:DataTypes.ENUM('character','book'), validate: { max: 255}},
   })

sequelize.define('series', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
   })
sequelize.define('songs', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       title: { type:DataTypes.STRING, validate: {max:255}},
       artist: { type:DataTypes.STRING, validate: {max:255}},
       position_in_playlist: { type:DataTypes.INTEGER}
   })
sequelize.define('tropes', {
       id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
       create_date:{ type:DataTypes.DATE, validate: { max:255 }},
       update_date:{ type:DataTypes.DATE, validate: { max:255 }},
       content: { type:DataTypes.TEXT, validate: { max: 255}
       }
   })
   sequelize.define('recipes', {
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    title: { type:DataTypes.STRING, validate: {max:255}},
    images_id: { type:DataTypes.ARRAY, references: through:{ Image, key: 'id'}}
})
   sequelize.define('Book', {
    id:{ type:DataTypes.INTEGER,allowNull: false, unique:true },
    create_date:{ type:DataTypes.DATE, validate: { max:255 }},
    update_date:{ type:DataTypes.DATE, validate: { max:255 }},
    title:{ type:DataTypes.TEXT},
    hook:{ type:DataTypes.TEXT},
    short_description:{ type:DataTypes.TEXT},
    tagline:{ type:DataTypes.STRING, validate: {max:255}},
    theme:{ type:DataTypes.STRING },
    trope_id: { type:DataTypes.ARRAY, references: { model: Trope, key: 'id'}},
    characters_id: { type:DataTypes.ARRAY, references: { model: Character, key: 'id'}},
    images_id: { type:DataTypes.ARRAY, references: {model: Image, key: 'id'}},
    series_id: { type:DataTypes.ARRAY, references: {model: Series, key: 'id'} },
    progress_id: { type:DataTypes.ARRAY, references: {model: ProgressBars, key: 'id'} },
    quotes_id: { type:DataTypes.ARRAY, references: {model: Quote, key: 'id'}},
    extras_id: { type:DataTypes.ARRAY, references: {model: Extras, key: 'id'} }
});

  

sequelize.sync({ force: true})


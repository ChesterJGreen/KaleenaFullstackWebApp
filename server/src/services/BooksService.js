const Trope = require('../models/Trope.js')
const Quote = require('../models/Quote.js')
const Character = require('../models/Character.js')
const Image = require('../models/Image.js')
const Series = require('../models/Series.js')
const ProgressBar = require('../models/ProgressBar.js')
const Extra = require('../models/Extra.js')
import { booksRepositories } from '../repositories/BooksRepositories.js'
import { BadRequest } from '../utils/Errors'

class BooksService {
  async getAll(query = {}) {
    const books = await booksRepositories.getAll({
      include: [[Trope], [Quote], [Character], [Image], [Series], [ProgressBar], [Extra]]
    })
    return books
  }
  async getById(id) {
    const book = await booksRepositories.getById(id, {
      include: [[Trope], [Quote], [Character], [Image], [Series], [ProgressBar], [Extra]]
    })
    if (book == null ) {
      throw new BadRequest('Invalid ID')
    }
    return book
  }
  async create(body) {
    const book = await booksRepositories.create(body)
    return await booksRepositories.getById()
  }
  async edit(body) {
    const book = await booksRepositories.findByIdAndUpdate(body.id, body, {new: true, runValidators: true})
    if (book ==  null) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }
  async destroy(id, userId) {
    const book = await booksRepositories.findOneAndUpdate({ _id: id, creatorID: userId})
    if (book == null) {
      throw new BadRequest('Invalid Id')
    }
    return book
  }
}

export const booksService = new BooksService()

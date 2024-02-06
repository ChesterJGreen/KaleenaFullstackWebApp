import { booksRepositories } from '../repositories/BooksRepositories.js'
import { BadRequest } from '../utils/Errors'

class BooksService {
  async getAll(query = {}) {
    const books = await booksRepositories.find(query)
    return books
  }
  async getById(id) {
    const book = await booksRepositories.findById(id)
    if (book == null ) {
      throw new BadRequest('Invalid ID')
    }
    return book
  }
  async create(body) {
    const book = await booksRepositories.create(body)
    return await booksRepositories.findById(book.id)
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

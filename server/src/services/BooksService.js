import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BooksService {
  async find(query = {}) {
    //const values = await dbContext.Books.find(query)
    // return values
  }

  async findById(id) {
    //const value = await dbContext.Books.findById(id)
    // if (!value) {
    //   throw new BadRequest('Invalid Id')
    // }
    // return value
  }
}

export const booksService = new BooksService()

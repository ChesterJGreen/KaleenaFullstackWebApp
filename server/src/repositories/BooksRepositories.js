import { models } from '../db/DbContext.js';
import Character from '../models/Character.js';

const { QueryTypes } = require('sequelize')
const Book = require('../models/Book.js')

class BookRepositories {
  async find(query) {
    // const books = await models.Book.findByPk(query)
    const books = await models.find(query)
  }
  async findById(id) {
    const book = await Book.findByPk(id)

}
  create(body) {
    throw new Error('Method not implemented.');
  }
  findByIdAndUpdate(id, body, arg2) {
    throw new Error('Method not implemented.');
  }
  findOneAndUpdate(arg0) {
    throw new Error('Method not implemented.');
  }

}
export const booksRepositories = new BookRepositories()

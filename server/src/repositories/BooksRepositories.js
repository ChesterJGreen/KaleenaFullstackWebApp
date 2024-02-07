import { db } from '../db/DbConfig.js';
const { QueryTypes } = require('sequelize')
const Book = require('../models/Book.js')

class BookRepositories {
  async getAll(query) {
    // const books = await models.Book.findByPk(query)
    const books = await db.models.Book.findAll(query)
        return books
  }
  async getById(id , query) {
    const book = await db.models.Book.findById(id, query)
        return book;

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

import { db } from '../db/DbConfig.js';
const { QueryTypes } = require('sequelize')
const Book = require('../models/Book.js')

class BooksRepositories {
  async getAll(query) {
    // const books = await models.Book.findByPk(query)
    console.log("in the respostory")
    // const dude = await db.models.Book.
    const books = await db.models.Book.findAll(query)
        return console.log(books)
  }
  async getById(id , query) {
    const book = await db.models.Book.findByPk(id, query)
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
export const booksRepositories = new BooksRepositories()

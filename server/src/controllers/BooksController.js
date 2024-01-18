import { Auth0Provider } from '@bcwdev/auth0provider'
import { booksService } from '../services/BooksService.js'
import BaseController from '../utils/BaseController'

export class BooksController extends BaseController {
  constructor() {
    super('api/books')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getOneValue)
      .post('', this.create)
      .put('/:id', this.edit)
      .patch('/:id', this.editOne)
      .delete('/:id', this.destroy)
      // NOTE If there is an authenticated user it will attach here otherwise allows through
      //.get('/:id', Auth0Provider.tryAttachUserInfo, this.getOneValue)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
  }

  /**
   * Sends all values back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAll(request, response, next) {
    try {
      response.send(['book1', 'book2'])
    } catch (error) {
      next(error)
    }
  }

  /**
   * Sends a single value by its id or error, back to the client
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getOneValue(request, response, next) {
    try {
      const value = booksService.findById(request.params.id)
      response.send(value)
    } catch (error) {
      next(error)
    }
  }
  

  async create(request, response, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      request.body.creatorId = request.userInfo.id

      response.send(request.body)
    } catch (error) {
      next(error)
    }
  }
  async edit(request, response, next) {
    try {
      const value = booksService.findById(request.params.id)
      response.send(value)
    } catch (error) {
      next(error)
    }
  }
  async editOne(request, response, next) {
    try {
      const value = booksService.findById(request.params.id)
      response.send(value)
    } catch (error) {
      next(error)
    }
  }
  async destroy(request, response, next) {
    try {
      const value = booksService.findById(request.params.id)
      response.send(value)
    } catch (error) {
      next(error)
    }
  }
}




import { Auth0Provider } from '@bcwdev/auth0provider'
import { tropesService } from '../services/TropesService.js'
import BaseController from '../utils/BaseController.js'

export class TropesController extends BaseController {
  constructor() {
    super('api/tropes')
    this.router
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.edit)
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
      console.log("in the controller")
      const tropes = await tropesService.getAll()
      response.send(tropes)
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
  async getById(request, response, next) {
    try {
      const trope = tropesService.getById(request.params.id)
      response.send(trope)
    } catch (error) {
      next(error)
    }
  }
  

  async create(request, response, next) {
    try {
      // NOTE NEVER TRUST THE CLIENT TO ADD THE CREATOR ID
      request.body.creatorId = request.userInfo.id
      const trope = await tropesService.create(request.body)
      response.send(trope)
    } catch (error) {
      next(error)
    }
  }
  async edit(request, response, next) {
    try {
      request.body.creatorId = request.userInfo.id
      request.body.id = request.params.id
      const trope = tropesService.edit(request.body)
      response.send(trope)
    } catch (error) {
      next(error)
    }
  }
  async destroy(request, response, next) {
    try {
      request.body.creatorId = request.userInfo.id
      const trope = tropesService.destroy(request.params.id, request.userInfo.id)
      response.send(trope)
    } catch (error) {
      next(error)
    }
  }
}




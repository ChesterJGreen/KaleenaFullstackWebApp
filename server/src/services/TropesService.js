const Trope = require('../models/Trope.js')
const Quote = require('../models/Quote.js')
const Character = require('../models/Character.js')
const Image = require('../models/Image.js')
const Series = require('../models/Series.js')
const ProgressBar = require('../models/ProgressBar.js')
const Extra = require('../models/Extra.js')
import { tropesRepositories } from '../repositories/TropesRepositories.js'
import { BadRequest } from '../utils/Errors.js'

class TropesService {
  async getAll(query = {}) {
    console.log("in the service")
    const tropes = await tropesRepositories.getAll({
      include: [[Trope], [Quote], [Character], [Image], [Series], [ProgressBar], [Extra]]
    })
    return tropes
  }
  async getById(id) {
    const trope = await tropesRepositories.getById(id, {
      include: [[Trope], [Quote], [Character], [Image], [Series], [ProgressBar], [Extra]]
    })
    if (trope == null ) {
      throw new BadRequest('Invalid ID')
    }
    return trope
  }
  async create(body) {
    const trope = await tropesRepositories.create(body)
    return await tropesRepositories.getById()
  }
  async edit(body) {
    const trope = await tropesRepositories.findByIdAndUpdate(body.id, body, {new: true, runValidators: true})
    if (trope ==  null) {
      throw new BadRequest('Invalid Id')
    }
    return trope
  }
  async destroy(id, userId) {
    const trope = await tropesRepositories.findOneAndUpdate({ _id: id, creatorID: userId})
    if (trope == null) {
      throw new BadRequest('Invalid Id')
    }
    return trope
  }
}

export const tropesService = new TropesService()


import Name from '../models/Name.js'
import { emailsRepositories } from '../repositories/EmailsRepositories.js'
import { BadRequest } from '../utils/Errors'

class EmailsService {
  async getAll(query = {}) {
    console.log("in the service")
    const emails = await emailsRepositories.getAll({
      include: [[Name]]
    })
    return emails
  }
  async getById(id) {
    const email = await emailsRepositories.getById(id, {
      include: [[Name]]
    })
    if (email == null ) {
      throw new BadRequest('Invalid ID')
    }
    return email
  }
  async create(body) {
    const email = await emailsRepositories.create(body)
    return await emailsRepositories.getById()
  }
  async edit(body) {
    const email = await emailsRepositories.findByIdAndUpdate(body.id, body, {new: true, runValidators: true})
    if (email ==  null) {
      throw new BadRequest('Invalid Id')
    }
    return email
  }
  async destroy(id, userId) {
    const email = await emailsRepositories.findOneAndUpdate({ _id: id, creatorID: userId})
    if (email == null) {
      throw new BadRequest('Invalid Id')
    }
    return email
  }
}

export const emailsService = new EmailsService()

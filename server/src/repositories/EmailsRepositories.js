const {Email} = require('../db/DbConfig.js')

class EmailsRepositories {
  async getAll() {
    const emails = Email.findAll()
        return emails
  }
  async getById(id) {
    const email = await Email.findByPk(id)
    return (email);
  }
  async create(body) {
    await Email.create(body)
    return
  }
  findByIdAndUpdate(id, body, arg2) {
    throw new Error('Method not implemented.');
  }
  async delete(id) {
    Email.destroy({
      where: { 
        id: id}})
        return
  }
}
export const emailsRepositories = new EmailsRepositories()

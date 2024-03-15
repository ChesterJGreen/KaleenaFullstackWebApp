const {Email} = require('../db/DbConfig.js')

class EmailsRepositories {
  async getAll() {
    console.log("in the controller ")
    const emails = Email.findAll()
        return emails
  }
  async getById(id) {
    const email = await Email.findByPk(id)
        return email;

}
  async create(body) {
    const newEmail = await Email.create(body)
  }
  findByIdAndUpdate(id, body, arg2) {
    throw new Error('Method not implemented.');
  }
  findOneAndUpdate(arg0) {
    throw new Error('Method not implemented.');
  }

}
export const emailsRepositories = new EmailsRepositories()

import { db } from '../db/DbConfig.js';
const { QueryTypes } = require('sequelize')
const Email = require('../models/Email.js')

class EmailsRepositories {
  async getAll(query) {
    // const emails = await models.Email.findByPk(query)
    console.log("in the respostory")
    // const dude = await db.models.Email.
    const emails = await db.models.Email.find().toJSON()
        return console.log(emails)
  }
  async getById(id , query) {
    const email = await db.models.Email.findById(id, query)
        return email;

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
export const emailsRepositories = new EmailsRepositories()

import { SELECT } from 'sequelize/types/query-types.js';
import { db } from '../db/DbConfig.js';
const { QueryTypes, Sequelize } = require('sequelize')
const Email = require('../models/Email.js')

class EmailsRepositories {
  async getAll() {
    const emails = await db.Sequelize.Email.findByPk(query)
    console.log("in the respostory")
    // const dude = await db.models.Email.
    const emails = await db.models.Email;
    console.log("these are the emails" + emails)
        return {"stuff": "so we've got"}
  }
  async getById(id) {
    const email = await db.models.Email.findByPk(id)
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

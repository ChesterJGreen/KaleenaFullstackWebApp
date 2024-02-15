import { db } from '../db/DbConfig.js';
const { QueryTypes } = require('sequelize')
const Trope = require('../models/Trope.js')

class TropesRepositories {
  async getAll(query) {
    // const tropes = await models.Trope.findByPk(query)
    console.log("in the respostory")
    const whatIsIt = await db.models.Trope.findAll()
    console.log(whatIsIt)
    const tropes = await db.models.Trope.find().toJSON()
        return console.log(tropes)
  }
  async getById(id , query) {
    const whatIsIt = await db.models.Trope.findAll()
    console.log(whatIsIt)
    const trope = await db.models.Trope.findById(id, query)
        return trope;

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
export const tropesRepositories = new TropesRepositories()

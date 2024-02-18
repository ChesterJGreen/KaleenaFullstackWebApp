import { Sequelize } from 'sequelize';
import { db } from '../db/DbConfig.js';
const Trope = require('../models/Trope.js')
const sequelize = require('sequelize')

class TropesRepositories {
  async getAll() {
    // const tropes = await models.Trope.findByPk(query)
    console.log("in the respostory")
    const tropes = await db.models.Trope.findAll()
    return tropes
  }
  async getById(id , query) {
    
    const trope = await db.models.Trope.findByPk(id)
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

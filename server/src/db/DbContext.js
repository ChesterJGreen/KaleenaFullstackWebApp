import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { Sequelize } from 'sequelize';

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  //Books = Sequelize.model('Books',BooksSchema)
}

export const dbContext = new DbContext()

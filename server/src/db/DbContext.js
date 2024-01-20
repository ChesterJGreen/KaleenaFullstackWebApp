import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account'
import { ValueSchema } from '../models/Value'
import { Model, Sequelize } from 'sequelize';

class DbContext extends Model {
  DbContext.init({

  }, {
    modelName: 'Book',
    tableName: 'Books',
    sequelize
  });
  Books = Sequelize.('Books',BooksSchema)
}

export const dbContext = new DbContext()

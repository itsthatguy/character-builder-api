import { resolve } from 'path';
import { Model } from 'objection';
import Application from './Application';

export default class User extends Application {
  static tableName = 'users';

  static jsonSchema = {
    type: 'object',
    required: ['username']
  };

  static relationMappings = {
    builds: {
      relation: Model.HasManyRelation,
      modelClass: resolve(__dirname, '../models/Build'),
      join: {
        from: 'builds.user_id',
        to: 'users.id',
      }
    }
  };
}

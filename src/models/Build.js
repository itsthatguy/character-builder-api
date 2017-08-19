import { resolve } from 'path';
import { Model } from 'objection';
import Application from './Application';

export default class Build extends Application {
  static tableName = 'builds';

  static jsonSchema = {
    type: 'object',
    required: ['user_id', 'value']
  };

  static relationMappings = {
    user: {
      relation: Model.BelongsToOneRelation,
      modelClass: resolve(__dirname, '../models/User'),
      join: {
        from: 'builds.user_id',
        to: 'users.id',
      }
    }
  };
}

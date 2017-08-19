
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('builds', function (t) {
      t.increments();
      t.json('value');
      t.integer('user_id').unsigned();
      t.foreign('user_id').references('users.id');
      t.timestamps();
    }),

    knex.schema.createTable('users', function (t) {
      t.increments();
      t.string('username').notNull().unique();
      t.timestamps();
    }),
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('builds'),
    knex.schema.dropTable('users')
  ]);
};

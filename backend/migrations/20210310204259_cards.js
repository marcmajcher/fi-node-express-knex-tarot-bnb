exports.up = (knex) =>
  knex.schema.createTable('cards', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable().unique();
    table.string('image').notNullable().unique();
  });

exports.down = (knex) => knex.schema.dropTable('cards');

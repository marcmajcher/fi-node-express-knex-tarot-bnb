exports.up = (knex) =>
  knex.schema.table('cards', (table) => {
    table.integer('number').notNullable().unique();
  });

exports.down = (knex) =>
  knex.schema.table('cards', (table) => table.dropColumn('number'));

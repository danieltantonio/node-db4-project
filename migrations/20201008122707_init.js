
exports.up = function(knex) {
  return knex.schema.createTable('recipe', tbl => {
      tbl.increments();
      tbl.string('recipe_name')
      .notNullable()
      .unique();
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name')
      .notNullable()
      tbl.integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipe')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('ingredients')
  .dropTableIfExists('recipe');
};

exports.seed = function(knex) {
  const ingredients = [
    {
      ingredient_name: 'Butter',
      recipe_id: 1
    },
    {
      ingredient_name: 'Seaweed',
      recipe_id: 2
    },
    {
      ingredient_name: 'Eggs',
      recipe_id: 3
    }
  ];

  return knex('ingredients').insert(ingredients);
};

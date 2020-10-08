exports.seed = function(knex) {
  const recipes = [
    {
      recipe_name: 'Cake'
    },
    {
      recipe_name: 'Sushi'
    },
    {
      recipe_name: 'Eggs'
    }
  ];

  return knex('recipe').insert(recipes);
};

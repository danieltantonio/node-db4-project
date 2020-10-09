const db = require('./connect');

module.exports = {
    getRecipes,
    getShoppingList
}

function getRecipes() {
    return db('recipe');
}

function getShoppingList(id) {
    return db('ingredients')
    .where('recipe_id', id)
}
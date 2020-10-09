const express = require('express');
const server = express();
const db = require('./db/db-config');

server.use(express.json());

server.get('/', (req,res) => {
    db
    .getRecipes()
    .then(recipes => {
        res.status(200).json(recipes);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

server.get('/:id', (req,res) => {
    db
    .getShoppingList(req.params.id)
    .then(list => {
        res.status(200).json(list);
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = server;
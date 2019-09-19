const db = require("../data/dbConfig.js");

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
}

async function insert(guitar) {
    return db("guitars").insert(guitars, "id")
}

async function update(id, changes) {
return null;
}

function remove(id) {
return null;
}

function getAll() {
return db('guitars');
}

function findById(id) {
return null;
}
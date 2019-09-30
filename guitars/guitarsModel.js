const db = require("../data/dbConfig.js");

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
}

async function insert(guitar) {
    return db("guitars").insert(guitar, "id")
}

async function update(id, changes) {
return null;
}

function remove(id) {
    return db("guitars")
        .where({id})
        .del();
}

function getAll() {
return db('guitars');
}

function findById(id) {
return null;
}
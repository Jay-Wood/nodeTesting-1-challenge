
exports.up = function(knex) {
  return knex.schema.createTable("guitars", tbl => {
    tbl.increments();
    
    tbl.text("Model", 128)
        .notNullable();
    
    tbl.text("Manufacturer", 128)
        .notNullable();

    tbl.integer("Year")

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('guitars');
};

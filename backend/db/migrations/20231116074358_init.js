/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("faculties", function (table) {
      table.increments("faculty_id").primary();
      table.string("faculty_name").notNullable().unique();
      table.timestamps(true, true); // Thêm created_at và updated_at
      table.boolean("is_deleted").defaultTo(false).comment("Soft delete flag");
    })
    .createTable("classes", function (table) {
      table.increments("class_id").primary();
      table.string("class_name").notNullable().unique();
      table.integer("faculty_id").unsigned().references("faculties.faculty_id");
      table.timestamps(true, true); // Thêm created_at và updated_at
      table.boolean("is_deleted").defaultTo(false).comment("Soft delete flag");
    })
    .createTable("students", function (table) {
      table.increments("student_id").primary();
      table.string("name").notNullable();
      table.date("dob");
      table.string("gender", 10);
      table.string("email");
      table.integer("class_id").unsigned().references("classes.class_id");
      table.integer("faculty_id").unsigned().references("faculties.faculty_id");
      table.timestamps(true, true); // Thêm created_at và updated_at
      table.boolean("is_deleted").defaultTo(false).comment("Soft delete flag");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("students")
    .dropTableIfExists("classes")
    .dropTableIfExists("faculties");
};

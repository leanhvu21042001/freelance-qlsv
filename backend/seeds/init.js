/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Xóa hết dữ liệu từ các bảng trước khi thêm dữ liệu mới
  await knex("students").del();
  await knex("classes").del();
  await knex("faculties").del();

  await knex("faculties").insert([
    { faculty_name: "Faculty of Science" },
    { faculty_name: "Faculty of Arts" },
    { faculty_name: "Faculty of Engineering" },
    { faculty_name: "Faculty of Medicine" },
    { faculty_name: "Faculty of Business" },
    { faculty_name: "Faculty of Social Sciences" },
  ]);
  await knex("classes").insert([
    { class_name: "Class A", faculty_id: 1 },
    { class_name: "Class B", faculty_id: 2 },
    { class_name: "Class C", faculty_id: 1 },
    { class_name: "Class D", faculty_id: 3 },
    { class_name: "Class E", faculty_id: 2 },
    { class_name: "Class F", faculty_id: 3 },
  ]);
  await knex("students").insert([
    {
      name: "John Doe",
      dob: "1990-01-01",
      gender: "Male",
      email: "john@example.com",
      class_id: 1,
      faculty_id: 1,
    },
    {
      name: "Jane Doe",
      dob: "1992-02-02",
      gender: "Female",
      email: "jane@example.com",
      class_id: 2,
      faculty_id: 2,
    },
    {
      name: "Bob Smith",
      dob: "1995-03-03",
      gender: "Male",
      email: "bob@example.com",
      class_id: 3,
      faculty_id: 1,
    },
    {
      name: "Alice Johnson",
      dob: "1993-04-04",
      gender: "Female",
      email: "alice@example.com",
      class_id: 1,
      faculty_id: 3,
    },
    {
      name: "Charlie Brown",
      dob: "1994-05-05",
      gender: "Male",
      email: "charlie@example.com",
      class_id: 2,
      faculty_id: 2,
    },
    {
      name: "Eve White",
      dob: "1991-06-06",
      gender: "Female",
      email: "eve@example.com",
      class_id: 3,
      faculty_id: 3,
    },
  ]);
};

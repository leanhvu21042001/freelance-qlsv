const knex = require("../../db");

class StudentsService {
  static instance = null;

  constructor() {
    if (!StudentsService.instance) {
      StudentsService.instance = this;
    }

    return StudentsService.instance;
  }

  // Tạo mới sinh viên
  async create(name, dob, gender, email, classId, facultyId) {
    return knex("students").insert({
      name: name,
      dob: dob,
      gender: gender,
      email: email,
      class_id: classId,
      faculty_id: facultyId,
    });
  }

  // Xóa sinh viên dựa trên ID
  async delete(studentId) {
    return knex("students").where({ student_id: studentId }).del();
  }

  // Cập nhật thông tin sinh viên dựa trên ID
  async update(studentId, name, dob, gender, email, classId, facultyId) {
    return knex("students").where({ student_id: studentId }).update({
      name: name,
      dob: dob,
      gender: gender,
      email: email,
      class_id: classId,
      faculty_id: facultyId,
    });
  }

  // Hiển thị thông tin sinh viên dựa trên ID
  async show(studentId) {
    return knex("students").where({ student_id: studentId }).first();
  }

  // Liệt kê tất cả sinh viên
  async list() {
    return knex("students")
      .select("*")
      .join("faculties", "faculties.faculty_id", "=", "students.faculty_id")
      .join("classes", "classes.class_id", "=", "students.class_id")
      .where("students.is_deleted", false)
      .options({ nestTables: true });
  }

  // Xóa mềm sinh viên dựa trên ID
  async softDelete(studentId) {
    return knex("students")
      .where({ student_id: studentId })
      .update({ is_deleted: true });
  }
}

module.exports = new StudentsService();

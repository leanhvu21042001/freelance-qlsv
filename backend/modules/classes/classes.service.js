const knex = require("../../db");

class ClassesService {
  static instance = null;

  constructor() {
    if (!ClassesService.instance) {
      ClassesService.instance = this;
    }

    return ClassesService.instance;
  }

  // Tạo mới lớp học
  async create(className, facultyId) {
    return knex("classes").insert({
      class_name: className,
      faculty_id: facultyId,
    });
  }

  // Xóa lớp học dựa trên ID
  async delete(classId) {
    return knex("classes").where({ class_id: classId }).del();
  }

  // Cập nhật thông tin lớp học dựa trên ID
  async update(classId, className, facultyId) {
    return knex("classes").where({ class_id: classId }).update({
      class_name: className,
      faculty_id: facultyId,
    });
  }

  // Hiển thị thông tin lớp học dựa trên ID
  async show(classId) {
    return knex("classes").where({ class_id: classId }).first();
  }

  // Liệt kê tất cả các lớp học
  async list() {
    return knex("classes").select("*").where({ is_deleted: false });
  }

  // Xóa mềm lớp học dựa trên ID
  async softDelete(classId) {
    return knex("classes")
      .where({ class_id: classId })
      .update({ is_deleted: true });
  }
}

module.exports = new ClassesService();

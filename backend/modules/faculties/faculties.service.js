const knex = require("../../db");

class FacultiesService {
  static instance = null;

  constructor() {
    if (!FacultiesService.instance) {
      FacultiesService.instance = this;
    }

    return FacultiesService.instance;
  }

  // Tạo mới khoa
  async create(facultyData) {
    return knex("faculties").insert(facultyData);
  }

  // Xóa khoa
  async delete(facultyId) {
    return knex("faculties").where({ faculty_id: facultyId }).del();
  }

  // Cập nhật thông tin khoa
  async update(facultyId, facultyData) {
    return knex("faculties")
      .where({ faculty_id: facultyId })
      .update(facultyData);
  }

  // Hiển thị thông tin khoa
  async show(facultyId) {
    return knex("faculties").where({ faculty_id: facultyId }).first();
  }

  // Liệt kê tất cả các khoa
  async list() {
    return knex("faculties").select("*").where({ is_deleted: false });
  }

  // Xóa mềm khoa (thay vì xóa hoàn toàn)
  async softDelete(facultyId) {
    return knex("faculties")
      .where({ faculty_id: facultyId })
      .update({ is_deleted: true });
  }
}

module.exports = new FacultiesService();

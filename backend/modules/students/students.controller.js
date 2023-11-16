const studentsService = require("./students.service");

class StudentsController {
  static instance = null;

  constructor() {
    if (!StudentsController.instance) {
      StudentsController.instance = this;
    }

    return StudentsController.instance;
  }

  // Tạo mới sinh viên
  async create(req, res, next) {
    try {
      const { name, dob, gender, email, class_id, faculty_id } = req.body;
      const result = await studentsService.create(
        name,
        dob,
        gender,
        email,
        class_id,
        faculty_id
      );
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Xóa sinh viên dựa trên ID
  async softDeleteById(req, res, next) {
    try {
      const studentId = req.params.id;
      await studentsService.softDelete(studentId);
      res
        .status(200)
        .json({ success: true, message: "Soft delete successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy thông tin sinh viên dựa trên ID
  async getById(req, res, next) {
    try {
      const studentId = req.params.id;
      const result = await studentsService.show(studentId);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Cập nhật thông tin sinh viên dựa trên ID
  async updateById(req, res, next) {
    try {
      const studentId = req.params.id;
      const { name, dob, gender, email, class_id, faculty_id } = req.body;
      await studentsService.update(
        studentId,
        name,
        dob,
        gender,
        email,
        class_id,
        faculty_id
      );
      res.status(200).json({ success: true, message: "Update successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy danh sách tất cả sinh viên
  async getAll(req, res, next) {
    try {
      const result = await studentsService.list();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new StudentsController();

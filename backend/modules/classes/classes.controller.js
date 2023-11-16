const classesService = require("./classes.service");

class ClassesController {
  static instance = null;

  constructor() {
    if (!ClassesController.instance) {
      ClassesController.instance = this;
    }

    return ClassesController.instance;
  }

  // Tạo mới lớp học
  async create(req, res, next) {
    try {
      const { class_name, faculty_id } = req.body;
      const result = await classesService.create(class_name, faculty_id);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Xóa lớp học dựa trên ID
  async softDeleteById(req, res, next) {
    try {
      const classId = req.params.id;
      await classesService.softDelete(classId);
      res
        .status(200)
        .json({ success: true, message: "Soft delete successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy thông tin lớp học dựa trên ID
  async getById(req, res, next) {
    try {
      const classId = req.params.id;
      const result = await classesService.show(classId);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Cập nhật thông tin lớp học dựa trên ID
  async updateById(req, res, next) {
    try {
      const classId = req.params.id;
      const { class_name, faculty_id } = req.body;
      await classesService.update(classId, class_name, faculty_id);
      res.status(200).json({ success: true, message: "Update successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy danh sách tất cả các lớp học
  async getAll(req, res, next) {
    try {
      const result = await classesService.list();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ClassesController();

const facultiesService = require("./faculties.service");

class FacultiesController {
  static instance = null;

  constructor() {
    if (!FacultiesController.instance) {
      FacultiesController.instance = this;
    }

    return FacultiesController.instance;
  }

  // Tạo mới khoa
  async create(req, res, next) {
    try {
      const facultyData = req.body; // Giả sử dữ liệu khoa được đưa vào qua request body
      const result = await facultiesService.create(facultyData);
      res.status(201).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Xóa mềm khoa dựa trên ID
  async softDeleteById(req, res, next) {
    try {
      const facultyId = req.params.id; // Giả sử ID khoa được truyền qua đường dẫn
      await facultiesService.softDelete(facultyId);
      res
        .status(200)
        .json({ success: true, message: "Soft delete successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy thông tin khoa dựa trên ID
  async getById(req, res, next) {
    try {
      const facultyId = req.params.id; // Giả sử ID khoa được truyền qua đường dẫn
      const result = await facultiesService.show(facultyId);
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }

  // Cập nhật thông tin khoa dựa trên ID
  async updateById(req, res, next) {
    try {
      const facultyId = req.params.id; // Giả sử ID khoa được truyền qua đường dẫn
      const facultyData = req.body; // Giả sử dữ liệu khoa được đưa vào qua request body
      await facultiesService.update(facultyId, facultyData);
      res.status(200).json({ success: true, message: "Update successful" });
    } catch (error) {
      next(error);
    }
  }

  // Lấy danh sách tất cả các khoa
  async getAll(req, res, next) {
    try {
      const result = await facultiesService.list();
      res.status(200).json({ success: true, data: result });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new FacultiesController();

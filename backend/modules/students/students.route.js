const express = require("express");
const router = express.Router();
const studentsController = require("./students.controller");

// Định nghĩa tuyến đường cho việc tạo mới sinh viên
router.post("/", studentsController.create);

// Định nghĩa tuyến đường cho việc xóa mềm sinh viên dựa trên ID
router.delete("/:id", studentsController.softDeleteById);

// Định nghĩa tuyến đường cho việc lấy thông tin sinh viên dựa trên ID
router.get("/:id", studentsController.getById);

// Định nghĩa tuyến đường cho việc cập nhật thông tin sinh viên dựa trên ID
router.put("/:id", studentsController.updateById);

// Định nghĩa tuyến đường cho việc lấy danh sách tất cả sinh viên
router.get("/", studentsController.getAll);

module.exports = router;

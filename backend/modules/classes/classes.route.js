const express = require("express");
const router = express.Router();
const classesController = require("./classes.controller");

// Định nghĩa tuyến đường cho việc tạo mới lớp học
router.post("/", classesController.create);

// Định nghĩa tuyến đường cho việc xóa mềm lớp học dựa trên ID
router.delete("/:id", classesController.softDeleteById);

// Định nghĩa tuyến đường cho việc lấy thông tin lớp học dựa trên ID
router.get("/:id", classesController.getById);

// Định nghĩa tuyến đường cho việc cập nhật thông tin lớp học dựa trên ID
router.put("/:id", classesController.updateById);

// Định nghĩa tuyến đường cho việc lấy danh sách tất cả các lớp học
router.get("/", classesController.getAll);

module.exports = router;

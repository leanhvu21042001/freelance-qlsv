const express = require("express");
const router = express.Router();
const facultiesController = require("./faculties.controller");

// Định nghĩa tuyến đường cho việc tạo mới khoa
router.post("/", facultiesController.create);

// Định nghĩa tuyến đường cho việc xóa mềm khoa dựa trên ID
router.delete("/:id", facultiesController.softDeleteById);

// Định nghĩa tuyến đường cho việc lấy thông tin khoa dựa trên ID
router.get("/:id", facultiesController.getById);

// Định nghĩa tuyến đường cho việc cập nhật thông tin khoa dựa trên ID
router.put("/:id", facultiesController.updateById);

// Định nghĩa tuyến đường cho việc lấy danh sách tất cả các khoa
router.get("/", facultiesController.getAll);

module.exports = router;

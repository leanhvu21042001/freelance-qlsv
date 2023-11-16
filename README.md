# freelance Quản lý Sinh Viên

> **Notes:** Người dùng sẽ đăng nhập vào hệ thống, thêm xóa, sửa: sách, khách hàng, tác giả, hóa đơn.

## Yêu cầu

- [x] 2-5 bảng dữ liệu. có ít nhất một mối quan hệ. (authors, books, customers, orders, users)
- [x] giao diện trên 4. chia nhỏ component.(authors, books, customers, orders, users)
- [x] Xử lý form nhập liệu.
- [x] Có sự kiện điều hướng các trang. (vue-router)
- [x] Có quản lý trang thái với composable, provide/inject, pinia, hoặc tanstack query. (tanstack query, composable, provide/inject)
- [x] API dạng RestAPI. dữ liệu trao đổi là json. (đọc và cập nhập dữ liệu). (axios)
- [x] công nghệ bắt buộc: Node.js+Expres, Knex.js, MySQL/MariaDB cho backend. Vue.js 3 cho front end. có sử dụng thư viện. (BE: Node.js+Expres, Knex.js, MySQL/MariaDB; FE: Vue.js 3, Bootstrap5)

<!-- Báo lỗi. Không đặt trùng tên -->

## Database

- Xóa toàn bộ bảng.

```sh
yarn rollback
```

- Tạo bảng.

```sh
yarn migrate
```

- Tạo dữ liệu mẫu:

```sh
yarn seed
```

<!-- Chạy tổng hợp: yarn reset -->

# Hệ thống quản lý ký túc xá sinh viên (Ứng dụng di động)
Ứng dụng quản lý ký túc xá sinh viên với backend Django REST Framework và frontend React Native.

## 📌 Giới thiệu
Hệ thống giúp quản lý ký túc xá sinh viên một cách hiệu quả.  
- **Sinh viên**: có thể đăng nhập, xem thông tin phòng, gửi yêu cầu hỗ trợ, thanh toán, xem thông báo, check in/out, tham gia khảo sát.
- **Quản trị viên**: quản lý sinh viên, phòng, thông báo, hóa đơn, yêu cầu và khảo sát.  
Mục tiêu: Tăng tính tự động hóa, giảm thủ tục thủ công trong quản lý ký túc xá.

## 🛠️ Công nghệ sử dụng
- **Backend**: Django REST Framework, MySQL  
- **Frontend (Mobile App)**: React Native, Android Studio  
- **Công cụ hỗ trợ**: Git, PyCharm, VS Code, Postman, Figma, Trello

## 🚀 Chức năng chính
- **Xác thực & Quản lý tài khoản**  
  - Đăng ký, đăng nhập với JWT Authentication.  
  - Phân quyền người dùng (Sinh viên, Quản trị viên).
  - Quên mật khẩu
  - Quản lý hồ sơ cá nhân của sinh viên.  

- **Quản lý ký túc xá**  
  - CRUD phòng (thêm, sửa, xóa, xem chi tiết).  
  - Quản lý thông tin sinh viên trong từng phòng.  

- **Yêu cầu & Hỗ trợ**  
  - Sinh viên gửi yêu cầu hỗ trợ (sửa chữa, bảo trì, thắc mắc).  
  - Quản trị viên tiếp nhận, phân loại và xử lý yêu cầu.  
  - Theo dõi trạng thái xử lý yêu cầu theo thời gian thực.  

- **Quản lý thông báo**  
  - Quản trị viên tạo và gửi thông báo chung cho toàn ký túc xá hoặc từng phòng.  
  - Sinh viên nhận thông báo trên ứng dụng di động.  

- **Ứng dụng di động (Mobile App)**  
  - Giao diện thân thiện, dễ sử dụng cho sinh viên.  
  - Hỗ trợ xem thông tin phòng, hợp đồng, lịch sử yêu cầu.  
  - Chức năng tìm kiếm và lọc thông tin.  


## ⚙️ Cài đặt & chạy

```bash
git clone https://github.com/yourusername/app_quan_ly_ky_tuc_xa.git

# Backend
cd backend
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver

# Frontend
cd frontend
npm install
npm start
# Nếu chạy trên Android:
npx react-native run-android

```
## 📸 Demo

👉 [Xem giao diện trên Figma](https://www.figma.com/design/p6E6FrF5F7MoDNiDthr9Wz/QL-KTXSV?node-id=0-1&t=ac7G6doUpLL2tduh-1)



## 👩‍💻 Thành viên
- Trương Tường Vi & Văn Nin – Backend & Mobile App
- Trương Tường Vi – Frontend



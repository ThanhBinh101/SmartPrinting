<a id="readme-top"></a>





<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/ThanhBinh101/SmartPrinting">
    <img src="hcmut.png" alt="Logo" width="160" height="160">
  </a>

<h3 align="center">Student Smart Printing Service</h3>

  <p align="center">
    Ứng dụng cung cấp dịch vụ in ấn tiện lợi cho sinh viên
    <br />
    <a href="#getting-started"><strong>Xem hướng dẫn »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ThanhBinh101/SmartPrinting/releases/">Tải xuống</a>
    ·
    <a href="mailto:xxx@hcmut.edu.vn">Báo lỗi</a>
    ·
    <a href="mailto:xxx@hcmut.edu.vn">Đề xuất tính năng</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<!-- <details>
  <summary>Mục lục</summary>
  <ol>
    <li>
      <a href="#about-the-project">Về dự án này</a>
      <ul>
        <li><a href="#built-with">Công nghệ sử dụng</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Bắt đầu</a>
      <ul>
        <li><a href="#prerequisites">Điều kiện</a></li>
        <li><a href="#installation">Cài đặt</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Hướng dẫn sử dụng</a>
      <ul>
        <li><a href="#notes">Một số lưu ý</a></li>
        <li><a href="#functions">Thao tác trong ứng dụng</a></li>
        <li><a href="#errors">Lỗi có thể xảy ra khi sử dụng</a></li>
      </ul>
    </li>
    <li><a href="#contact">Liên hệ</a></li>
    <li><a href="#acknowledgments">Tài liệu tham khảo</a></li>
  </ol>
</details> -->





<!-- ABOUT THE PROJECT -->
<a id="about-the-project"></a>

## Về dự án này

Ứng dụng này được hiện thực để phục vụ cho môn học Công nghệ phần mềm, thuộc về Trường Đại học Bách khoa, ĐHQG TP.HCM. Dự án hướng đến mục tiêu xây dựng nên một trang web cung cấp dịch vụ in ấn tiện lợi cho sinh viên của trường.

Thành viên phát triển dự án:

- NGUYỄN THỊ THANH BÌNH - 
- NGUYỄN THIÊN HẢI - 
- NGUYỄN TRẦN MINH ANH - 
- NGUYỄN TUẤN ANH - 
- NGUYỄN XUÂN LỘC - 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


### Công nghệ sử dụng
<a id="built-with"></a>

- [NodeJS](https://nodejs.org/en)
- [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [NestJS](https://nestjs.com/)
- [ReactJS](https://react.dev/)
- [Taiwind CSS](https://tailwindcss.com/)
<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- GETTING STARTED -->
<a id="getting-started"></a>

## Bắt đầu

<a id="prerequisites"></a>
### Điều kiện

Trước khi sử dụng ứng dụng, bạn cần cài đặt trước một số phần mềm sau:

- []() (phiên bản xxx)

<a id="installation"></a>
### Cài đặt

Vì ứng dụng chưa được triển khai tên miền, bạn có thể sử dụng nó bằng localhost với các bước sau:

1. Truy cập đường dẫn [https://github.com/ThanhBinh101/SmartPrinting/edit/main](https://github.com/ThanhBinh101/SmartPrinting/edit/main).

2. Tải về source code và giải nén, lưu vào nơi bạn muốn

3. Mở một chương trình shell (Command Prompt, Powershell, Bash...) 

4. Thay đổi đường dẫn tới thư mục của ứng dụng (hcmut-ssps) bằng lệnh `cd <dir>`

5. Tại thư mục gốc, chạy các lệnh sau để khởi động chương trình phía client (giao diện ứng dụng sẽ tự động hiển thị sau bước này)

```bash
npm i
```



<p align="right">(<a href="#readme-top">back to top</a>)</p>





<!-- USAGE -->
<a id="usage"></a>

## Hướng dẫn sử dụng

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Nhóm chức năng của sinh viên
1. **Đăng nhập**: Sinh viên cần đăng nhập vào hệ thống bằng mã số sinh viên (MSSV) để thực hiện các chức năng in ấn.
2. **Duyệt danh sách máy in**: Xem danh sách các máy in có sẵn để in tài liệu.
3. **Chọn máy in**: Quyền chọn máy in để thực hiện in ấn.
4. **Tải tài liệu lên**: Upload tài liệu cần in lên hệ thống.
5. **Chỉnh sửa thuộc tính in**: Thay đổi kích thước giấy, số trang, chế độ in (một mặt/hai mặt) và số bản in.
6. **Xem lịch sử in**: Kiểm tra lịch sử in ấn cá nhân.
7. **Mua giấy**: Mua thêm giấy thông qua hệ thống thanh toán trực tuyến.
8. **Nhận thông báo**: Nhận thông báo khi tài liệu đã được in xong.
9. **Xem số lượng giấy còn lại**: Kiểm tra số lượng giấy hiện có trong tài khoản.

### Nhóm chức năng của admin
1. **Đăng nhập**: Admin đăng nhập vào hệ thống để quản lý các chức năng.
2. **Quản lý máy in**: Thêm, xóa, và chỉnh sửa thông tin các máy in trong hệ thống.
3. **Quản lý sinh viên**: Xem danh sách sinh viên sử dụng dịch vụ in ấn.
4. **Quản lý nhân viên**: Xem và phân công các nhân viên quản lý máy in.
5. **Xem báo cáo**: Kiểm tra báo cáo lịch sử in ấn và tình trạng máy in trong toàn bộ hệ thống.
6. **Điều chỉnh chính sách in**: Thay đổi số lượng giấy cấp cho sinh viên mỗi kỳ và thay đổi ngày cấp giấy.
7. **Quản lý loại file**: Thay đổi các định dạng file được phép upload vào hệ thống.
8. **Giám sát hoạt động**: Theo dõi tất cả hoạt động in ấn và thanh toán trong hệ thống để đảm bảo tính minh bạch.



<!-- CONTACT -->
<a id="contact"></a>

## Liên hệ

Mọi thắc mắc, báo lỗi, đề xuất tính năng cho ứng dụng xin hay liên hệ qua địa chỉ email:



<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ACKNOWLEDGMENTS -->
<a id="acknowledgments"></a>


<p align="right">(<a href="#readme-top">back to top</a>)</p>

import "./Footer.scss";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h3>THÔNG TIN CHUNG</h3>
          <ul>
            <li>
              <a href="#">Về chúng tôi</a>
            </li>
            <li>
              <a href="#">Chính Sách Riêng Tư</a>
            </li>
            <li>
              <a href="#">Câu hỏi thường gặp</a>
            </li>
            <li>
              <a href="#">Chính Sách bảo mật thông tin</a>
            </li>
            <li>
              <a href="#">Chính sách bảo hành, đổi trả</a>
            </li>
            <li>
              <a href="#">Chính sách thanh toán</a>
            </li>
            <li>
              <a href="#">Chính Sách Giao, Nhận Hàng và Kiểm Hàng</a>
            </li>
          </ul>
          <div>
            <img src="./images/bocongthuong.png" alt="" />
          </div>
        </div>
        <div>
          <h3>CHĂM SÓC KHÁCH HÀNG</h3>
          <ul>
            <li>
              <a href="#">Liên hệ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>CÁC THÔNG TIN KHÁC</h3>
          <ul>
            <li>
              <a href="#">Thương hiệu</a>
            </li>
            <li>
              <a href="#">Khuyến mãi</a>
            </li>
            <li>
              <a href="#">Bí Quyết Làm Đẹp</a>
            </li>
          </ul>
        </div>
        <div>
          <h3>THÔNG TIN</h3>
          <h4>CÔNG TY TNHH ASIALFT</h4>
          <ul>
            <li>
              <span>Địa chỉ:</span> 96 Phạm Thị Tánh, Phường 4,
              <br />
              Quận 8, Thành phố Hồ Chí Minh, Việt Nam
            </li>
            <li>
              <span>Hotline: </span>(+84) 775750185 - <br />
              (+84) 778871783
            </li>
            <li>
              <span>Email:</span> info@kosmebox.com
            </li>
            <li>
              <span>GPKD:</span> 0315476762 do Sở Kế hoạch và Đầu
              <br />
              tư thành phố Hồ Chí Minh cấp ngày 14 <br />
              tháng 01 năm 2019
            </li>
          </ul>
        </div>
      </footer>
      <div className="bottom-footer">Bản quyền thuộc về Kosmebox Pte. Ltd.</div>
    </>
  );
};
export default Footer;

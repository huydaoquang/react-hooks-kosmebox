import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <h3>THÔNG TIN CHUNG</h3>
          <ul>
            <li>
              <Link>Về chúng tôi</Link>
            </li>
            <li>
              <Link>Chính Sách Riêng Tư</Link>
            </li>
            <li>
              <Link>Câu hỏi thường gặp</Link>
            </li>
            <li>
              <Link>Chính Sách bảo mật thông tin</Link>
            </li>
            <li>
              <Link>Chính sách bảo hành, đổi trả</Link>
            </li>
            <li>
              <Link>Chính sách thanh toán</Link>
            </li>
            <li>
              <Link>Chính Sách Giao, Nhận Hàng và Kiểm Hàng</Link>
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
              <Link>Liên hệ</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>CÁC THÔNG TIN KHÁC</h3>
          <ul>
            <li>
              <Link>Thương hiệu</Link>
            </li>
            <li>
              <Link>Khuyến mãi</Link>
            </li>
            <li>
              <Link>Bí Quyết Làm Đẹp</Link>
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

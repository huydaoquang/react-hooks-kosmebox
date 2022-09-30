import { FaFacebook } from "react-icons/fa";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./RegisterContent.scss";
const RegisterContent = () => {
  return (
    <>
      <div className="row-register">
        <div className="col">
          <h4>Đăng Kí Tài Khoản</h4>
          <p>
            Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật
            tình trạng đơn hàng, theo dõi những đơn hàng đã đặt.
          </p>
          <div className="wrapper">
            <div className="btn-fb">
              <FaFacebook style={{ fontSize: "40px", color: "#fff" }} />
              <span>Facebook</span>
            </div>
            <div className="btn-gg">
              <AiFillGooglePlusCircle
                style={{ fontSize: "40px", color: "#fff" }}
              />
              <span>Google</span>
            </div>
          </div>
          <div>
            Nếu bạn đã đăng kí tài khoản, vui lòng đăng nhập tại{" "}
            <Link to={`/Login`} style={{ color: "red" }}>
              đây.
            </Link>
          </div>
          <span className="title">Thông tin cá nhân</span>
          <div>
            <div className="container">
              <label htmlFor="">Tên:</label>
              <input type="text" placeholder="Tên:" />
            </div>
            <div className="container">
              <label htmlFor="">Địa chỉ E-Mail:</label>
              <input type="text" placeholder="Địa chỉ E-Mail:" />
            </div>
            <div className="container">
              <label htmlFor="">Mật Khẩu:</label>
              <input type="text" placeholder="Mật Khẩu:" />
            </div>
            <div className="container">
              <label htmlFor=""> Nhập lại Mật Khẩu:</label>
              <input type="text" placeholder="Nhập lại Mật Khẩu:" />
            </div>
            <div className="container">
              <label htmlFor="">Điện Thoại:</label>
              <input type="text" placeholder="Điện Thoại:" />
            </div>
            <div className="container">
              <label htmlFor="">Địa chỉ:</label>
              <input type="text" placeholder="Địa chỉ:" />
            </div>
            <div className="container">
              <label htmlFor="">Tỉnh / Thành phố</label>
              <select>
                <option value="">Hà Nội</option>
                <option value="">Hải Phòng</option>
                <option value="">Đà Nẵng</option>
                <option value="">Thành phố Hồ Chí Minh</option>
                <option value="">Cần Thơ</option>
                <option value="">Phan Thiết </option>
                <option value="">Đồng Hới</option>
                <option value="">Thái Bình</option>
                <option value="">Thanh Hóa</option>
                <option value="">Huế</option>
              </select>
            </div>
            <div className="container">
              <label htmlFor="">Quận huyện</label>
              <select>
                <option value="">Hai Bà Trưng</option>
                <option value="">Ba Đình</option>
                <option value="">Đà Nẵng</option>
                <option value="">Bắc Từ Liêm</option>
                <option value="">Hoàng Mai</option>
                <option value="">Long Biên</option>
                <option value="">Nam Từ Liêm</option>
                <option value="">Đống Đa</option>
                <option value="">Cầu Giấy</option>
                <option value="">Tây Hồ</option>
              </select>
            </div>
            <div className="container">
              <label htmlFor="">Quốc Gia:</label>
              <select>
                <option value="">Việt Nam </option>
              </select>
            </div>
            <span style={{ borderBottom: "1px dotted #ddd", display: "block" }}>
              Thư thông báo
            </span>
            <br />
            <div>
              <span style={{ paddingRight: "120px" }}>Đăng kí thông báo:</span>
              <input type="radio" style={{ margin: "0 5px" }} />
              Có
              <input type="radio" style={{ margin: "0 5px" }} />
              Không
            </div>
            <div
              style={{
                margin: "10px 0",
                padding: "20px 10px",
                border: "1px solid #ddd",
              }}
            >
              <input type="checkbox" style={{ margin: "0 10px" }} />
              <span>Tôi muốn trở thành Cộng Tác Viên.</span>
            </div>
            <div
              style={{
                margin: "10px 0",
                padding: "20px 10px",
                border: "1px solid #ddd",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Link>
                <button>TIẾP TỤC</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterContent;

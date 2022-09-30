import { FaFacebook } from "react-icons/fa";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./LoginContent.scss";
const LoginContent = () => {
  return (
    <div className="row">
      <div className="col left">
        <span className="title">Khách hàng mới</span>
        <span>Đăng kí tài khoản</span>
        <p>
          Bằng cách tạo tài khoản bạn sẽ có thể mua sắm nhanh hơn, cập nhật tình
          trạng đơn hàng, theo dõi những đơn hàng đã đặt.
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
        <hr></hr>
        <button className="btn-left">tiếp tục</button>
      </div>
      <div className="col right">
        <span className="title">Khách hàng cũ</span>
        <span>Tôi là khách hàng cũ</span>
        <label htmlFor="">Địa chỉ E-Mail:</label>
        <input type="text" placeholder="Địa chỉ E-Mail:" />
        <label htmlFor="">Mật khẩu:</label>
        <input type="password" placeholder="Mật khẩu:" />
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
        <Link>Quên mật khẩu</Link>
        <button>đăng nhập</button>
      </div>
    </div>
  );
};
export default LoginContent;

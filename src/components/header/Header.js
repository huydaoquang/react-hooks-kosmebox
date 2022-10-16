import "./Header.scss";
import { FaHeart, FaDollarSign } from "react-icons/fa";
import { HiUser, HiUserAdd, HiSearch } from "react-icons/hi";
// import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsBoxArrowInRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <div className="header-top">
        <ul>
          <li>
            <FaHeart
              style={{ width: "15px", height: "15px", margin: "0 5px -3px 0" }}
            />
            <Link to={`/`}>Về kosmebox</Link>
          </li>
          <li>
            <HiUser
              style={{
                width: "18px",
                height: "18px",
                marginBottom: "-5px",
                color: "#ed145b",
              }}
            />
            <Link to={`/Login`}>Đăng nhập</Link>
          </li>
          <li>
            <BsBoxArrowInRight
              style={{
                width: "18px",
                height: "18px",
                marginBottom: "-5px",
                color: "#ed145b",
              }}
            />
            <Link to={`/Register`}>Đăng ký</Link>
          </li>
          <li>
            <FaDollarSign
              style={{ width: "18px", height: "18px", marginBottom: "-5px" }}
            />
            <Link to={`/`}>Thanh toán</Link>
          </li>
        </ul>
      </div>
      <div className="header-bottom">
        <div className="header-logo">
          <img src="./images/logo.jpg" alt="" />
        </div>
        <input type="text" placeholder="Tìm kiếm..."></input>
        <Link to={`/Search`}>
          <div className="search">
            <HiSearch
              style={{
                width: "30px",
                height: "30px",
                margin: "40px 0 0 -68px",
                color: "#ed145b",
                cursor: "pointer",
              }}
            />
          </div>
        </Link>

        <div
          className="wrapper"
          style={{
            width: "120px",
            display: "flex",
            alignItems: "center",
            marginTop: "25px",
            marginLeft: "-30px",
          }}
        >
          <span>
            <img
              src="./images/icon.png"
              alt=""
              style={{
                width: "55px",
                height: "66px",
                display: "block",
                marginBottom: "12px",
              }}
            />
          </span>
          <span
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <Link to={`/Link`}>
              Bí quyết <br></br>làm đẹp
            </Link>
          </span>
        </div>
        <div
          className="wrapper"
          style={{
            width: "120px",
            display: "flex",
            alignItems: "center",
            marginTop: "25px",
            marginLeft: "-10px",
          }}
        >
          <span>
            <HiUserAdd
              style={{
                fontSize: "40px",
                marginBottom: "10px",
                color: "#ed145b",
              }}
            />
          </span>
          <span
            style={{
              width: "60px",
              height: "60px",
            }}
          >
            <Link to={`/Link`}>
              Tuyển <br></br>CTV
            </Link>
          </span>
        </div>
        {/* <AiOutlineShoppingCart
          style={{
            width: "40px",
            height: "40px",
            color: "#ed145b",
            margin: "50px 0 0 100px",
          }}
        /> */}
      </div>
    </header>
  );
};
export default Header;

import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineStar, AiOutlineCheck } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import "./ProductDetailContent.scss";
import "./LinkContent.scss";
const LinkContent = () => {
  return (
    <div className="row-product-detail">
      <div className="col">
        <div className="col-left">
          <div className="img-left">
            <img src="./images/05.jpg" alt="" />
          </div>
          <div className="img-right">
            <img src="./images/05.jpg" alt="" />
            <img src="./images/9.jpg" alt="" />
          </div>
        </div>
        <div className="col-right">
          <h3>Sữa Rửa Mặt Soonsiki Clean Sebum Clay Pack To Form 120ml</h3>
          <div className="container-wrapper">
            <div className="wrapper-left">
              <div className="wrapper-item">
                <div className="icon">
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </div>
                <span>
                  0 đánh giá <span style={{ color: "#000" }}>/</span> Viết đánh
                  giá
                </span>
              </div>
              <div className="wrapper-money">
                <h3 className="line-through">299,000 đ</h3>
                <h1 style={{ color: "red" }}>69,000 đ</h1>
              </div>
              <div className="wrapper-btn">
                <button className="btn-item">-</button>
                <button>1</button>
                <button className="btn-item">+</button>
              </div>
              <div className="wrapper-btn-submit">
                <button className="btn-left">THÊM VÀO GIỎ HÀNG</button>
                <button className="btn-right">MUA NGAY</button>
              </div>
              <form action="">
                <input
                  type="text"
                  placeholder="Nhập số điện thoại được tư vấn miễn phí"
                />
                <button>NHẬP</button>
              </form>
            </div>
            <div className="wrapper-right">
              <div className="wrapper-right-top">
                <FaFacebookF className="icon fb" />
                <BsPinterest className="icon pinterest" />
                <BsInstagram className="icon instagram" />
              </div>
              <div className="wrapper-right-bottom">
                <h4>LỢI ÍCH KHI MUA HÀNG</h4>
                <ul>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Cam Kết Hàng Chính Hãng.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Được Thanh Toán Khi Nhận Hàng.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Miễn Phí Kiểm Tra Hàng.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Miễn Phí Đổi Trả Sản Phẩm Lỗi Trong 07 Ngày.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Miễn Phí Ship Cho Đơn Hàng Từ 700,000đ.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Nhận Nhiều Ưu Đãi Hấp Dẫn Khi Kích Hoạt VIP.</a>
                  </li>
                  <li>
                    <AiOutlineCheck className="icon" />
                    <a>Tích Điểm Và Đổi Quà Yêu Thích.</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LinkContent;

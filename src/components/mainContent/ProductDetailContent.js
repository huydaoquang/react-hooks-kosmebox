import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineStar, AiOutlineCheck, AiOutlineRight } from "react-icons/ai";
import { BsPinterest, BsInstagram } from "react-icons/bs";
import "./ProductDetailContent.scss";
const ProductDetailContent = () => {
  return (
    <>
      <div className="row-product-detail-top">
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
                    0 đánh giá <span style={{ color: "#000" }}>/</span> Viết
                    đánh giá
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
      <div className="row-product-detail-bottom">
        <div className="col">
          <div className="col-left">
            <div className="col-left-header">
              <h3>THÔNG SỐ SẢN PHẨM</h3>
              <div className="wrapper">
                <span>Mã sản phẩm:</span>
                <span> SOO-SRM-CB-CPTF</span>
              </div>
              <div className="wrapper">
                <span>Lượt xem:</span>
                <span> 1960</span>
              </div>
              <div className="wrapper">
                <span>Tình trạng:</span>
                <span> Còn hàng</span>
              </div>
            </div>
            <h2>Sản phẩm đang được bán chạy nhất</h2>
            <div className="container-product">
              <div className="product-item">
                <img src="./images/47.jpg" alt="" />
                <p>[NEW] Son Tint Siêu Lì Peripera Ink The Gelato</p>
                <h2>55.000đ</h2>
                <span className="line-through">198.000đ</span>
              </div>
              <div className="product-item">
                <img src="./images/37.jpg" alt="" />
                <p>
                  Son Thỏi Collagen The Face Shop Collagen Ampoule Lipstick 3,5g
                </p>
                <h2>148.000đ</h2>
                <span className="line-through">329.050đ</span>
              </div>
              <div className="product-item">
                <img src="./images/44.jpg" alt="" />
                <p>
                  Sữa Rửa Mặt Tẩy Tế Bào Và Dưỡng Trắng Da Trị Nám The Face Shop
                  White Seed Exfoliating Foam Cleanser 150ml
                </p>
                <h2>100.000đ</h2>
                <span className="line-through">200.050đ</span>
              </div>
              <div className="product-item">
                <img src="./images/46.jpg" alt="" />
                <p>
                  Tinh Chất Dưỡng Mắt Chiết Xuất Hoa Oải Hương Laneige
                  Perfect...
                </p>
                <h2>77.000đ</h2>
                <span className="line-through">300.050đ</span>
              </div>
            </div>
          </div>
          <div className="col-right">
            <h4>DƯỠNG DA</h4>
            <ul>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tẩy Trang</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Sữa Rửa Mặt</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tẩy Tế Bào Chết</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Mặt Nạ Mask - Mátxa Mặt</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Nước Hoa Hồng</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tẩy Trang</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Sữa Dưỡng</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tinh Chất</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Dưỡng Da</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Xít Khoáng Mist</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Chống Nắng</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Đặc Trị Mụn</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Trắng - Trị Thâm Nám</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Se Khít Lỗ Chân Lông</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Chống Lão Hóa</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Ẩm Sâu</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Da Nhạy Cảm</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Tay</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Sữa Tắm Body</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Dưỡng Body</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Chống Nắng Body</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tẩy Da Chết Body</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Tẩy Lông</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dụng cụ Vệ Sinh Da</Link>
              </li>
            </ul>
            <h4 style={{ marginTop: "20px" }}>THƯƠNG HIỆU</h4>
            <ul>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Missha</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>ELF</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Etude House</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Innisfree</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Nước Hoa Hồng</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Lanneige</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Skinfood</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>The Face Shop</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tony Moly</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Xít Khoáng Mist</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>3CE</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Secret Key</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>The Face Inc</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Apieu</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Peripera</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Aloha</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Bano</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Aritaum</Link>
              </li>
            </ul>
            <h4 style={{ marginTop: "20px" }}>DƯỠNG TÓC</h4>
            <ul>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Tinh Chất Dưỡng Tóc</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Trị Gàu - Làm Sạch Da Đầu</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Ủ Tóc - Nhuộm Tóc</Link>
              </li>
            </ul>
            <h4 style={{ marginTop: "20px" }}>TRANG ĐIỂM</h4>
            <ul>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kẻ Mày - Kẻ Mắt</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Lót Mắt</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Phấn Mắt</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Mascara - FixerMascara - Fixer</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Mi</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Lanneige</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Son Môi</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Son Thỏi</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Son Lì - Son Bóng</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Son Kem - Son Tint</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Son Dưỡng - Tẩy Môi Chết</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kẻ Viền Môi</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem Lót - Phấn/Kem Nền</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Phấn Phủ - Phấn Nén</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Kem BB - CC</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Che Khuyết Điểm</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Dưỡng Da Nhạy Cảm</Link>
              </li>
              <li>
                <AiOutlineRight className="icon" />
                <Link>Má Hồng Blusher</Link>
              </li>
            </ul>
            <h4 style={{ marginTop: "20px" }}>SẢN PHẨM ĐÃ XEM</h4>
            <div className="wrapper-product">
              <img src="./images/05.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Sữa rửa mặt Soonsiki Clean Sebum Clay Pack To Form [HSD
                  08/2022]
                </p>
                <span>
                  <span className="line-through">299,000 đ</span> 69,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/02.jpg" alt="" />
              <div className="wrapper-content">
                <p>Mặt Nạ Innisfree Capsule Recipe Pack 10ml</p>
                <span>
                  <span className="line-through">60,000 đ </span> 36,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/1.jpg" alt="" />
              <div className="wrapper-content">
                <p>Gel tẩy tế bào Soonsiki peenling gel [HSD 08/2022]</p>
                <span>
                  <span className="line-through">300,000 đ</span> 229,000 đ
                </span>
              </div>
            </div>
            <h4 style={{ marginTop: "20px" }}>SẢN PHẨM MUA CÙNG</h4>
            <div className="wrapper-product">
              <img src="./images/38.jpg" alt="" />
              <div className="wrapper-content">
                <p>Mặt Nạ Giấy Innisfree My Real Squeeze Mask [HSD 8/2022]</p>
                <span>
                  <span className="line-through">29,000 đ</span> 12,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/39.jpg" alt="" />
              <div className="wrapper-content">
                <p>Mặt Nạ Giấy The Face Shop Real Nature Mask Sheet - 20g</p>
                <span>
                  <span className="line-through">30,000 đ</span> 17,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/40.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Mặt Nạ Giấy Chăm Sóc Da Toàn Diện Foodaholic Essential Mask
                  23g
                </p>
                <span>
                  <span className="line-through">25,000 đ</span> 12,500 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/37.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Son Thỏi Collagen The Face Shop Collagen Ampoule Lipstick 3,5g
                </p>
                <span>
                  <span className="line-through">329,000 đ</span> 315,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/27.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Mặt Nạ Ngủ Dưỡng Ẩm Môi Và Phục Hồi Môi Thâm Laneige Special
                  Care Lip Sleeping Mask 3g (Dùng Thử)
                </p>
                <span>
                  <span className="line-through">90,000 đ </span>37,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/43.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Kem Chống Nắng 3 Tác Dụng Chuyên Sâu Innisfree Intensive
                  Triple Care Sunscreen SPF50+ Pa++++ 50ml (Mới 2022)
                </p>
                <span>
                  <span className="line-through">360,000 đ </span> 259,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/31.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Kem Dưỡng Nâng Tông Da Trắng Sáng Chiết Xuất Hoa Anh Đào
                  Innisfree Jeju Cherry Blossom Tone Up Cream 50ml
                </p>
                <span>
                  <span className="line-through">480,000 đ </span> 285,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/45.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Sữa Rửa Mặt Trà Xanh Innisfree Green Tea Cleansing Foam 150ml
                </p>
                <span>
                  <span className="line-through">240,000 đ </span> 129,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/44.jpg" alt="" />
              <div className="wrapper-content">
                <p>
                  Sữa Rửa Mặt Tẩy Tế Bào Và Dưỡng Trắng Da Trị Nám The Face Shop
                  White Seed Exfoliating Foam Cleanser 150ml
                </p>
                <span>
                  <span className="line-through">420,000 đ </span> 189,000 đ
                </span>
              </div>
            </div>
            <div className="wrapper-product">
              <img src="./images/41.jpg" alt="" />
              <div className="wrapper-content">
                <p>Chì Kẻ Mày 2 Đầu The Face Shop Designing Eyebrow Pencil</p>
                <span>
                  <span className="line-through">150,000 đ</span> 59,000 đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ProductDetailContent;

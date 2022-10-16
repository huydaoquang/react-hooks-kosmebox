import "./HomeContent.scss";
import { RiContactsBook2Fill } from "react-icons/ri";
import { AiFillFire, AiOutlineStar } from "react-icons/ai";
import { BsCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const HomeContent = () => {
  return (
    <>
      <div className="main-content">
        <div className="row">
          {/* <div className="container">
            <h1>ĐỒNG GIÁ 9K - 79K</h1>
            <div className="wrapper">
              <Link to={`/Mat-na-innisfree-capsule-recipe-pack-10ml`}>
                <div className="card">
                  <img src="./images/02.jpg" alt="" />
                  <div className="card-content">
                    <span>Mặt Nạ Innisfree Capsule Recipe Pack 10ml</span>
                    <span
                      style={{
                        marginTop: "22px",
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      <span className="line-through">60,000 đ</span> 36,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Sn-sale-che-khuyet-diem`}>
                <div className="card">
                  <img src="./images/04.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Che Khuyết Điểm Innisfree Mineral Stick Concealer 2g [HSD
                      05/2022]
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      <span className="line-through">149,000 đ</span>
                      44,700 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link
                to={`/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml`}
              >
                <div className="card">
                  <img src="./images/05.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Sữa rửa mặt Soonsiki Clean Sebum Clay Pack To Form [HSD
                      08/2022]
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      <span className="line-through">299,000 đ</span>
                      69,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link
                to={`/che-khuyet-diem-moi-mat-va-mat-the-face-shop-concealer-dual-veil-trolls-8-1g`}
              >
                <div className="card">
                  <img src="./images/06.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Che Khuyết Điểm Siêu Đa Năng The Face Shop Concealer Dua
                      Veil 8.1g [V201]
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      <span className="line-through">216,000 đ</span>
                      193,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/co-to-mau-may-etude-house-color-my-brows-cara`}>
                <div className="card">
                  <img src="./images/07.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Che Khuyết Điểm Siêu Đa Năng The Face Shop Concealer Dua
                      Veil 8.1g [V201]
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      <span className="line-through">285,000 đ</span>
                      142,500 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="btn-icon">
              <BsCircleFill color="red" />
              <BsCircleFill />
              <BsCircleFill />
            </div>
            <div className="see-more">
              <Link to={`/Product-Detail`}>
                <button>xem thêm</button>
              </Link>
            </div>
          </div> */}
          <div className="container block">
            <h1>
              <AiFillFire style={{ color: "gold" }} />
              XEM THÊM DEAL SỐC XẢ KHO - ƯU ĐÃI ĐẾN 70%
              <AiFillFire style={{ color: "gold" }} />
            </h1>
            <div className="wrapper">
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/17.png" alt="" />
                  <div className="card-content">
                    <span>
                      Dầu Tẩy Trang Tinh Dầu Hoa Hồng Cocon Rose Cleansing Oil
                      140ML
                    </span>
                    <span
                      style={{
                        marginTop: "22px",
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      180,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/18.png" alt="" />
                  <div className="card-content">
                    <span>
                      Cọ Dặn Phấn Đa Năng Missha Artistool Blnding Brush #204
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      192,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/34.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Xịt Khoáng Giúp Làm Sạch & Làm Dịu Da La Roche-Posay
                      Serozinc 50ml
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      280,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/20.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Bộ Dương Trị Mụm Some By Mi AHA-BHA 30 Days Miracle Set (4
                      Sản Phẩm)
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      2,850,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/21.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Bộ Dưỡng Da Innisfree Trà Xanh Green Tea Balancing Ex (4
                      Sản Phẩm)
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      1,709,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/22.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Cọ Vẽ Lông Mày Missha Artisttool Brow Brush #501
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      144,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/23.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      [NEW] Dầu Gội Kích Mọc Tóc OGX Thick And Full Biotin And
                      Collagen Shampoo 385ml
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      340,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/24.jpg" alt="" />
                  <div className="card-content">
                    <span>Nước Hoa Nam Tính Đẳng Cấp Charme King 60ml</span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "22px",
                      }}
                    >
                      550,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="container product-hot">
            <h1>
              <AiOutlineStar style={{ color: "gold" }} />
              SẢN PHẨM BÁN CHẠY NHẤT
              <AiOutlineStar style={{ color: "gold" }} />
            </h1>
            <div className="wrapper">
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/25.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Kem Chống Nắng Dành Cho Da Dầu Và Nhạy Cảm Innisfree Tone
                      Up No Sebum Sunscreen SPF50 PA++++
                    </span>
                    <span
                      style={{
                        marginTop: "22px",
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      235,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/26.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Sữa Rửa Mặt Tẩy Tế Bào Và Dưỡng Trắng Da Trị Nám The Face
                      Shop White Seed Exfoliaing Foam Cleanser 150ml
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                      }}
                    >
                      420,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/27.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Mặt Nạ Ngủ Dưỡng Ẩm Môi Và Phục Hồi Môi Thêm Laneige
                      Special Care Lip Sleeping Mask 3g (Dùng Thử)
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      90,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/28.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Tẩy Da Chết Trắng Da Chiết Xuất Ngọc Trai The Face Shop
                      White Jewel Peeling 120ml
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "42px",
                      }}
                    >
                      280,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/29.jpg" alt="" />
                  <div className="card-content">
                    <span>
                      Mặt Nạ Tẩy Tế Bào Chết Chiết Xuất Từ Lúa Mạch Innisfree
                      Green Barley Gommange Peeling Mask 120ml
                    </span>
                    <span
                      style={{
                        color: "#ed145b",
                        fontWeight: "700",
                        marginTop: "20px",
                      }}
                    >
                      290,000 đ
                    </span>
                    <button>Mua hàng</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="btn-icon">
              <BsCircleFill color="red" />
              <BsCircleFill />
              <BsCircleFill />
              <BsCircleFill />
            </div>
          </div>
          <div className="container block bottom">
            <h1 style={{ background: "#ddd", marginBottom: "10px" }}>
              <RiContactsBook2Fill
                style={{
                  color: "red",
                  marginBottom: "-5px",
                }}
              />
              BÍ QUYẾT LÀM ĐẸP
            </h1>
            <div className="wrapper">
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/30.jpg" alt="" />
                  <div className="card-content">
                    <h4>Top 3 Sữa Rửa Mặt Cho Da Mụn Đáng Đồng Tiền Bát Gạo</h4>
                    <span>
                      Top 3 Sữa Rửa Mặt Cho Da Mụn Đáng Đồng Tiền Bát Gạo Một
                      buổi sáng nào đó bạn thức dậy với một
                    </span>
                    <button>Xem Thêm</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/31.jpg" alt="" />
                  <div className="card-content">
                    <h4>Top 3 kem dưỡng da "nhả nắng" hiệu quả sau Tết</h4>
                    <span>
                      Top 3 kem dưỡng da "nhả nắng" hiệu quả sau Tết chơi hết
                      mình, sau Tết hú hồn, trầm cảm với làn da đen
                    </span>
                    <button>Xem Thêm</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/32.jpg" alt="" />
                  <div className="card-content">
                    <h4>Ding dong... Hộp quà Kosmebox trao tay ngày TẾT</h4>
                    <span>
                      Ding dong... Hộp quà Kosmebox trao tay ngày TẾT Hộp qùa mỹ
                      phẩm với đầy đủ các mặt hàng HÓT, những
                    </span>
                    <button>Xem Thêm</button>
                  </div>
                </div>
              </Link>
              <Link to={`/Product-Detail`}>
                <div className="card">
                  <img src="./images/33.jpg" alt="" />
                  <div className="card-content">
                    <h4>
                      Đổ xô dùng kem chống nắng nhưng có thể bạn chưa biết
                    </h4>
                    <span>
                      Sở dĩ kem chống nắng vật lý được nhiều người yêu thích là
                      vì tính thân thiện, và an toàn cho mọi làn da, đặc
                    </span>
                    <button>Xem Thêm</button>
                  </div>
                </div>
              </Link>
            </div>
            <div className="see-more">
              <Link to={`/Product-Detail`}>
                <button>xem thêm</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeContent;

import React, { useState, useEffect } from "react";
import "../styles/cart.scss";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Cart = ({ cart, setCart, handleChange, setShow }) => {
  const [price, setPrice] = useState(0);
  const successful = () => {
    toast.success("Thanh Toán Thành Công");
    return;
  };

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
    toast.success("Xóa Thành Công");
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <div className="wrapper-cart">
      {price === 0 ? (
        <>
          <div className="wrapper-empty">
            <h3>Giỏ hàng của bạn đang trống!</h3>
            <span>Vui lòng thêm sản phẩm vào rỏ hàng</span>
            <div className="container-bottom empty">
              <Link to={`/Search`}>
                <button className="btn-right">TIẾP TỤC</button>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <table id="customers">
            <thead>
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Đơn Giá</th>
                <th>Xóa</th>
              </tr>
            </thead>
          </table>
          <article>
            {cart.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_img">
                  <img src={item.img} alt="" />
                  <p>{item.title}</p>
                </div>
                <div className="container-btn-number">
                  <button onClick={() => handleChange(item, 1)}>+</button>
                  <button>{item.amount}</button>
                  <button onClick={() => handleChange(item, -1)}>-</button>
                </div>
                <div className="wrapper">
                  <span>{item.price} đ</span>
                  <button onClick={() => handleRemove(item.id)}>Xóa</button>
                </div>
              </div>
            ))}
            <div className="total">
              <div>
                <span>Tổng Cộng:</span>
                <span>{price} đ</span>
              </div>
              <div>
                <span>Thành Tiền:</span>
                <span>{price} đ</span>
              </div>
            </div>
            <div className="container-bottom">
              <Link to={"/Link"}>
                <button className="btn-left">TIẾP TỤC MUA HÀNG</button>
              </Link>
              <button className="btn-right" onClick={successful}>
                THANH TOÁN
              </button>
            </div>
          </article>
        </>
      )}
    </div>
  );
};

export default Cart;

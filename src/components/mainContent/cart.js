import React, { useState, useEffect } from "react";
import "../styles/cart.scss";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);
  const success = () => toast.success("Thanh Toán Thành Công");

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
          <button className="btn-right" onClick={success}>
            THANH TOÁN
            <ToastContainer />
          </button>
        </div>
      </article>
    </div>
  );
};

export default Cart;

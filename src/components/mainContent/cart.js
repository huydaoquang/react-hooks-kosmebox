import React, { useState, useEffect } from "react";
import "../styles/cart.scss";
import { Link } from "react-router-dom";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
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
            <div>
              <button onClick={() => handleChange(item, 1)}>+</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, -1)}>-</button>
            </div>
            <div>
              <span>{item.price} đ</span>
              <button onClick={() => handleRemove(item.id)}>Remove</button>
            </div>
          </div>
        ))}
        <div className="total">
          <span> Tổng cộng: </span>
          <span>Thành tiền: {price} đ</span>
        </div>
        <div className="container-bottom">
          <Link to={"/Sn-sale-che-khuyet-diem"}>
            <button className="btn-left">TIẾP TỤC MUA HÀNG</button>
          </Link>
          <button className="btn-right">THANH TOÁN</button>
        </div>
      </article>
    </div>
  );
};

export default Cart;

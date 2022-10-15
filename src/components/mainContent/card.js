import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
      <Link to={`/${item.id}`}>
        <div className="image_box">
          <img src={img} alt="" />
        </div>
      </Link>
      <div className="details">
        <p>{title}</p>
        <div>
          <p>{price} đ</p>
          <button onClick={() => handleClick(item)}>Mua Hàng</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

// id, title, author, price, img

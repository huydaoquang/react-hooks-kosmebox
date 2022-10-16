import React from "react";
import { Link } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { toast } from "react-toastify";

const Cards = ({ item, handleClick }) => {
  const { title, price, img } = item;
  return (
    <div className="cards">
      <Link to={`/Mat-na-innisfree-capsule-recipe-pack-10ml`}>
        <div className="image_box">
          <img src={img} alt="" />
        </div>
      </Link>
      <div className="details">
        <p className="title">{title}</p>
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

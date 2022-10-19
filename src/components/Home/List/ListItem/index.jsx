import React from "react";
import "./styles.css";

const ListItem = ({
  item: { coverSrc, title, price, deliveryFee, serviceTime, rating },
}) => (
  <div className="listItem-wrap">
    <img src={coverSrc} alt="" />
    <header>
      <h4>{title}</h4>
      <span>🌟{rating}</span>
    </header>
    <div className="much">
      <p>
        <b>{serviceTime}</b>
      </p>
      <p>
        <b style={{ color: "red" }}>{price} đ</b>
      </p>
    </div>
  </div>
);

export default ListItem;

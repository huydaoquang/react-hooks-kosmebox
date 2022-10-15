import React from "react";
import "../styles/navbar.scss";
import { AiFillHome } from "react-icons/ai";

const Navbar = ({ setShow, size }) => {
  return (
    <div className="container-cart">
      <span onClick={() => setShow(true)}>
        <AiFillHome className="home-cart" />
      </span>
      <div className="cart" onClick={() => setShow(false)}>
        <span>
          <i className="fas fa-cart-plus"></i>
        </span>
        <span>{size}</span>
      </div>
    </div>
  );
};

export default Navbar;

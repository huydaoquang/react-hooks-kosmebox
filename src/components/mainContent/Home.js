import React, { useState } from "react";
import Page from "./page";
import Navbar from "./navbar";
import Cart from "./cart";
import HomeContent from "./HomeContent";
import Nav from "../nav/Nav";
import { toast } from "react-toastify";

const Home = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    toast.success("Thêm Thành Công");
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <React.Fragment>
      <Navbar setShow={setShow} size={cart.length} />
      <Nav></Nav>
      {show ? (
        <>
          <Page handleClick={handleClick} />
          <HomeContent></HomeContent>
        </>
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
    </React.Fragment>
  );
};

export default Home;

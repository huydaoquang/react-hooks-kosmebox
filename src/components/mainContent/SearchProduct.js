// import { useState } from "react";
import { DataProduct } from "./DataProduct";
import "./Search.scss";

export const SearchProduct = () => {
  console.log(DataProduct);
  return (
    <div>
      {DataProduct.map((item) => (
        <div className="container-data-product" key={item.id}>
          <img src={item.img} alt="" />
          <span>{item.text}</span>
          <span>{item.much}</span>
        </div>
      ))}
    </div>
  );
};

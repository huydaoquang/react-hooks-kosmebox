import React from "react";
import LoadingSkeleton from "../loading/SearchLoading";
import "./Card.scss";
const CardLoading = () => {
  return (
    <>
      {/* <div className="container-search-loading ">
        <div className="skeleton" style={{ with: "100%", height: 400 }}></div>
      </div> */}

      <div className="container-card-loading">
        <div className="skeleton" style={{ width: "100%", height: 300 }}></div>
        <div className="skeleton" style={{ width: "100%", height: 50 }}></div>
        <div className="skeleton" style={{ width: "100%", height: 20 }}></div>
        <div
          className="skeleton"
          style={{ width: "100%", height: 68, borderRadius: "5px" }}
        ></div>
      </div>
    </>
  );
};

export default CardLoading;

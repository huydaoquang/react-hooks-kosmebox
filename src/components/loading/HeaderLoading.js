import React from "react";

const HeaderLoading = () => {
  return (
    <div className="container-search-loading">
      <div
        className="skeleton"
        style={{ width: "100%", height: 110, marginBottom: "20px" }}
      ></div>
    </div>
  );
};

export default HeaderLoading;

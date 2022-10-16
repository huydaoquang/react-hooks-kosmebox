import React from "react";
import { IoDiamond } from "react-icons/io5";
import { AiOutlineGift, AiOutlineLike, AiTwotoneLike } from "react-icons/ai";
import "./HeaderHomeContent.scss";

const HeaderHomeContent = () => {
  return (
    <>
      <div className="row-header">
        <div className="content-header">
          <div className="block">
            <IoDiamond
              style={{
                display: "block",
                width: "50px",
                height: "50px",
                padding: "10px",
                marginBottom: "-50px",
                marginRight: "10px",
                color: "#ed145b",
                borderRadius: "50%",
                border: "1px solid #ed145b",
              }}
            />
            <div>
              <h3>tích lũy điểm &amp; vip</h3>
              <span>tích lũy điểm &amp; kích hoạt VIP thêm các ưu đãi</span>
            </div>
          </div>
          <div className="block">
            <AiOutlineGift
              style={{
                display: "block",
                width: "50px",
                height: "50px",
                padding: "10px",
                marginBottom: "-50px",
                color: "#ed145b",
                borderRadius: "50%",
                border: "1px solid #ed145b",
              }}
            />
            <div>
              <h3>tích điểm đổi quà</h3>
              <span>áp dụng từ VIP2 trở lên</span>
            </div>
          </div>
          <div className="block">
            <AiOutlineLike
              style={{
                display: "block",
                width: "50px",
                height: "50px",
                padding: "10px",
                marginBottom: "-50px",
                color: "#ed145b",
                borderRadius: "50%",
                border: "1px solid #ed145b",
              }}
            />
            <div>
              <h3>hàng chính hãng</h3>
              <span>đảm bảo hàng thật chính hãng</span>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <div className="content">
            <span>
              <AiTwotoneLike
                style={{
                  width: "25px",
                  height: "25px",
                  marginBottom: "-4px",
                }}
              />
            </span>
            <span>đảm bảo thật chính hãng</span>
            <button>xem thêm</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderHomeContent;

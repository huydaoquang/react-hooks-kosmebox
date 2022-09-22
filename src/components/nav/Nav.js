import "./Nav.scss";
import { AiFillHome, AiFillLike, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav>
        <div className="wrapper">
          <div className="home">
            <Link to={`/`}>
              <AiFillHome
                style={{
                  color: "#f2f2f2",
                  fontSize: " 30px",
                }}
              />
            </Link>
          </div>
          <ul className="menu">
            <li className="menu_item">
              <Link to="" className="menu_link">
                THƯƠNG HIỆU
              </Link>
              <div className="menu_child">
                <div className="menu_child-item logo">
                  <h4>Các Thương Hiệu Tiêu Biểu</h4>
                  <div className="wrapper_logo">
                    <img src="./images/logo01.jpg" alt="" />
                    <img src="./images/logo02.png" alt="" />
                    <img src="./images/logo03.jpg" alt="" />
                    <img src="./images/logo04.png" alt="" />
                    <img src="./images/logo05.jpeg" alt="" />
                    <img src="./images/logo06.png" alt="" />
                    <img src="./images/logo07.jpeg" alt="" />
                    <img src="./images/logo08.jpg" alt="" />
                    <img src="./images/logo09.png" alt="" />
                    <img src="./images/logo10.png" alt="" />
                    <img src="./images/logo11.jpg" alt="" />
                    <img src="./images/logo12.png" alt="" />
                  </div>
                </div>
                <div className="menu_child-item">
                  <h4>A - F</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>3CE</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>ARITAUM</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Etude House</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Camiane</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Doctorslab</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dr.Haiian</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dr.Skin</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>13 Month</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>16 Brand</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>18 Herbs Organics</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>3D</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>3PCS</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>82X</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>8Solution</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>95Problem</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Absolute Orgaic</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Agapan</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>AHC</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Ala Mode Paris</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Alleeni</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>AloHa</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>AMOKA</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Ample:n</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Anessaa</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Angel Liquid</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Angel's Liquid</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>AngeLooka</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Anjo</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Antiphlamine</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Apal</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`} className="see-more">
                        Xem Thêm...
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>G - I </h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Innisfree</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>G9 Skin</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Gamier</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Geo Lamy</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>GetNewSkin</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Giinsu</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Giorgio</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>GOLD MYJIN</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Goden Cocoon</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Goodal</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Guerisson</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hajiwon</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Handok</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hanyul</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Happy Bath</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Harana</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Haru Hibiscus</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hatomugi</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Head &amp; Shoulders</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hello Kitty</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hera</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hokkaido</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Hlika Holika</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Huyxley</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>INCUGEL</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Inga</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>INOBEL</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Insur. B</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>IOPE</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kinka</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`} className="see-more">
                        Xem Thêm...
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>J - R</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Laneige</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Missha</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Palmrers</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>PERIPERA</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>10mgrx</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Bywishtrend</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>I'm From</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>I'M Meme</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Isehan</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Jil Gyung Yi</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>JinJoo</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>3PCS</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>JM Solution</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>JW</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>J'sun</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>K-Lip</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kanizea</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>keli</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kiehl'sKiehl's</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kinder Puppets</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kinka</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kobayyashi</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kocomei</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Krecie</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>L.K. Cosmetics</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>La Roche-Posay</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>LABIOTTE</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Ladykin</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>LAEL</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Lanéve</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`} className="see-more">
                        Xem Thêm...
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>S - Z </h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Secret Key</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Skinfood</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>THE FACE SHOP</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Son &amp; Park</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>VANT 36.5</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>2VaVa</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sakura</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Salua</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>SAM'U</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Scion</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>SEATREE ART</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Secret</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Senka</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Seoul Rose</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>SexyLook</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Shangpree</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Shiseido</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>SHU UEMURA</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Silcot</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Silk Crystal Plus</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Silk Herb Essence</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Simple</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sivanna Colors</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sk-II</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>SKIN FACTORY</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Skin1004</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Snow Buddy</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>So Naural</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Antiphlamine</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Apal</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`} className="see-more">
                        Xem Thêm...
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu_item col4">
              <Link to="" className="menu_link">
                Trang Điểm
              </Link>
              <div className="menu_child col4">
                <div className="menu_child-item">
                  <h4>Trang Điểm Mắt - Eye Makeup</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Lót Mắt</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Phấn Mắt</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Chì Kẻ Mày - Kẻ Mắt</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Mascara - Fixer</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Dài Mi</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>Trang Điểm Mặt - Face Makeup</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Phấn Nước - Kem Lót - Kem Nền</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Phấn Phủ - Phấn Nén</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem BB - CC</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Che Khuyết Điểm Mặt - Face</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Má Hồng Blusher</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Phấn Tạo Khối - Highlighter</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4> Trang Điểm Môi - Son Môi - Lipstick</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Son Thỏi - Lipstick</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Son Lì - Son Xăm - Son Bóng</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Son Kem Son Tint</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Son Dưỡng Môi - Tẩy Da Chết Môi</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kẻ Viền Môi</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>Dụng Cụ Trang Điểm</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Cọ - Mút - Kẹp Mi</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu_item col4">
              <Link to="" className="menu_link">
                Dưỡng Da
              </Link>
              <div className="menu_child col4">
                <div className="menu_child-item">
                  <h4>Các Vấn Đề Của Da</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Trắng - Trị Thâm Nám</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Trị Mụn</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Se Khít Lỗ Chân Lông</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Chống Nhăn - Chống Lão Hóa Da</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Ẩm Sâu</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Cho Da Nhạy Cảm</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Cho Da Hỗn Hợp</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Cho Da Dầu</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>Các Bước Dưỡng Da</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Tẩy Trang</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sữa Rửa Mặt - Face Wash</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>
                        Tẩy Tế Bào Chết Da Mặt - Face Srub
                      </Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>
                        Mặt Nạ - Mặt Nạ Ngủ - Mask - Mátxa Mặt
                      </Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Nước Hoa Hồng - Toner Cân Bằng</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sữa Dưỡng - Lotin/Emulsion</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>
                        Serum,Essence, Tinh Chất Dưỡng Da
                      </Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Dưỡng Mắt</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Dưỡng Da</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Xịt Khoáng - Mist</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Chống Nắng</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>Dưỡng Thể</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Tay Hand Care</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sữa Dưỡng Thể Body Lotion</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Sữa Tắm Bod Wask</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Dưỡng Body</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Chống Nắng Body</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Tẩy Da Chết Toàn Thân Body</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Kem Tẩy Lông</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dụng Cụ Vệ Sinh Da</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Thực Phẩm Chức Năng</Link>
                    </li>
                  </ul>
                </div>
                <div className="menu_child-item">
                  <h4>Dưỡng Tóc</h4>
                  <ul className="menu_child-list">
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>
                        Tinh Chất Dưỡng Tóc - Nuôi Dưỡng Tóc
                      </Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Trị Gàu - Làm Sạch Da Đầu</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Ú Tóc - Nhộm Tóc</Link>
                    </li>
                    <li>
                      <AiOutlineRight
                        style={{
                          width: "11px",
                          color: "red",
                          margin: "0 5px -2px 0 ",
                        }}
                      ></AiOutlineRight>
                      <Link to={`/Link`}>Dưỡng Mi</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="menu_item">
              <Link to="" className="menu_link">
                Bộ Sản Phẩm
              </Link>
            </li>
            <li className="menu_item">
              <Link to="" className="menu_link">
                Nước Hoa
              </Link>
            </li>
            <li className="menu_item">
              <Link to="" className="menu_link">
                Dùng Thử
              </Link>
            </li>
            <li className="menu_item">
              <Link to="" className="menu_link">
                HỘP QUÀ KOS
              </Link>
            </li>
            <li className="menu_item">
              <AiFillLike
                style={{
                  width: "25px",
                  height: "25px",
                  marginLeft: "88px",
                  marginBottom: "-5px",
                  color: "#f1c40f",
                  fontSize: "25px",
                }}
              ></AiFillLike>
              <Link to="" className="menu_link right">
                Top Review
              </Link>
            </li>
            <li className="menu_item dropdown">
              <Link to="" className="menu_link right">
                Hướng Dẫn
              </Link>
              <ul className="menu-child-2item">
                <li>
                  <Link to={`/Link`}>Hướng Dẫn Mua Hàng</Link>
                </li>
                <li>
                  <Link to={`/Link`}>Chính Sách Giao Hàng</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Nav;

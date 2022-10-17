import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
// import HomeContent from "./components/mainContent/HomeContent";
import LoginContent from "./components/mainContent/LoginContent";
import RegisterContent from "./components/mainContent/RegisterContent";
import ProductDetailContent from "./components/mainContent/ProductDetailContent";
import ProductDetailContent2 from "./components/mainContent/ProductDetailContent2";
import ProductDetailContent3 from "./components/mainContent/ProductDetailContent3";
import ProductDetailContent4 from "./components/mainContent/ProductDetailContent4";
import ProductDetailContent5 from "./components/mainContent/ProductDetailContent5";
import LinkContent from "./components/mainContent/LinkContent";
import YoutubeSearch from "./components/mainContent/YoutubeSearch";
import Home from "./components/mainContent/Home";
// import { SearchData } from "./components/mainContent/SearchData";
// import { SearchProduct } from "./components/mainContent/SearchProduct";
// import Navbar from "./components/mainContent/navbar";
import ClipLoader from "react-spinners/ClipLoader";
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            {loading ? (
              <div className="loading">
                <ClipLoader color={"#d636ad"} loading={loading} size={100} />
                <span>Loading Data...</span>
              </div>
            ) : (
              <>
                <Header></Header>
                <Home></Home>
                <Footer></Footer>
              </>
            )}
          </Route>
          <Route path="/Register">
            <Header></Header>
            <Nav></Nav>
            <RegisterContent></RegisterContent>
            <Footer></Footer>
          </Route>
          <Route path="/Login">
            <Header></Header>
            <Nav></Nav>
            <LoginContent></LoginContent>
            <Footer></Footer>
          </Route>
          <Route path="/Link">
            <Header></Header>
            <Nav></Nav>
            <LinkContent></LinkContent>
            <Footer></Footer>
          </Route>
          <Route path="/Mat-na-innisfree-capsule-recipe-pack-10ml">
            <Header></Header>
            <Nav></Nav>
            <ProductDetailContent2></ProductDetailContent2>
            <Footer></Footer>
          </Route>
          <Route path="/Sn-sale-che-khuyet-diem">
            <Header></Header>
            <Nav></Nav>
            <ProductDetailContent3></ProductDetailContent3>
            <Footer></Footer>
          </Route>
          <Route path="/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml">
            <Header></Header>
            <Nav></Nav>
            <ProductDetailContent></ProductDetailContent>
            <Footer></Footer>
          </Route>
          <Route path="/che-khuyet-diem-moi-mat-va-mat-the-face-shop-concealer-dual-veil-trolls-8-1g">
            <Header></Header>
            <Nav></Nav>
            <ProductDetailContent4></ProductDetailContent4>
            <Footer></Footer>
          </Route>
          <Route path="/co-to-mau-may-etude-house-color-my-brows-cara">
            <Header></Header>
            <Nav></Nav>
            <ProductDetailContent5></ProductDetailContent5>
            <Footer></Footer>
          </Route>
          <Route path="/Search">
            <Header></Header>
            <Nav></Nav>
            <YoutubeSearch></YoutubeSearch>
            {/* <SearchData></SearchData> */}
            {/* <SearchProduct></SearchProduct> */}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

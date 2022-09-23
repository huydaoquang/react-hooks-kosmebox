import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import HomeContent from "./components/mainContent/HomeContent";
import LoginContent from "./components/mainContent/LoginContent";
import RegisterContent from "./components/mainContent/RegisterContent";
import ProductDetailContent from "./components/mainContent/ProductDetailContent";
import ProductDetailContent2 from "./components/mainContent/ProductDetailContent2";
import ProductDetailContent3 from "./components/mainContent/ProductDetailContent3";
import ProductDetailContent4 from "./components/mainContent/ProductDetailContent4";
import ProductDetailContent5 from "./components/mainContent/ProductDetailContent5";
import LinkContent from "./components/mainContent/LinkContent";
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Nav></Nav>
        <Switch>
          <Route exact path="/">
            <HomeContent></HomeContent>
          </Route>
          <Route path="/Register">
            <RegisterContent></RegisterContent>
          </Route>
          <Route path="/Login">
            <LoginContent></LoginContent>
          </Route>
          <Route path="/Link">
            <LinkContent></LinkContent>
          </Route>
          <Route path="/Mat-na-innisfree-capsule-recipe-pack-10ml">
            <ProductDetailContent2></ProductDetailContent2>
          </Route>
          <Route path="/Sn-sale-che-khuyet-diem">
            <ProductDetailContent3></ProductDetailContent3>
          </Route>
          <Route path="/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml">
            <ProductDetailContent></ProductDetailContent>
          </Route>
          <Route path="/che-khuyet-diem-moi-mat-va-mat-the-face-shop-concealer-dual-veil-trolls-8-1g">
            <ProductDetailContent4></ProductDetailContent4>
          </Route>
          <Route path="/co-to-mau-may-etude-house-color-my-brows-cara">
            <ProductDetailContent5></ProductDetailContent5>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import HomeContent from "./components/mainContent/HomeContent";
import LoginContent from "./components/mainContent/LoginContent";
import RegisterContent from "./components/mainContent/RegisterContent";
import ProductDetailContent from "./components/mainContent/ProductDetailContent";
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
          <Route path="/sua-rua-mat-soonsiki-clean-sebum-clay-pack-to-form-120ml">
            <ProductDetailContent></ProductDetailContent>
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

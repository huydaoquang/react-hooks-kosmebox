import Header from "./views/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./views/nav/Nav";
import Footer from "./views/footer/Footer";
import HomeContent from "./views/mainContent/HomeContent";
import LoginContent from "./views/mainContent/LoginContent";
import RegisterContent from "./views/mainContent/RegisterContent";
import ProductDetailContent from "./views/mainContent/ProductDetailContent";

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
          {/* <Route path="/Mat-na-innisfree-capsule-recipe-pack-10ml">
            <ProductDetailContent></ProductDetailContent>
          </Route> */}
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;

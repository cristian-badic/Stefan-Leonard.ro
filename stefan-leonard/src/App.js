import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import FourZeroFour from "./pages/404/404";
import PortofolioWorking from "./pages/portofolioWorking/portofolioWorking.jsx";
import PortofolioHobby from "./pages/portofolioHobby/portofolioHobby.jsx";
import "./App.css";

function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/portofolioWorking" component={PortofolioWorking}></Route>
            <Route exact path="/portofolioHobby" component={PortofolioHobby}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={FourZeroFour}></Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;

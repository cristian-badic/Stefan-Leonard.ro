import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Portofolio from "./pages/portofolio/portofolio";
import About from "./pages/about/about";
import FourZeroFour from "./pages/404/404";
import PortofolioTest from "./pages/portofolio/portofolio2.jsx";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/portofolio" component={PortofolioTest}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route component={FourZeroFour}></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

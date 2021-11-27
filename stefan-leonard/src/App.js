import React from "react";
import wolves from "./components/assets/video/holanda.mp4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import Portofolio from "./pages/portofolio/portofolio";
import About from "./pages/about/about";
import FourZeroFour from "./pages/404/404";
import * as Scroll from "react-scroll";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

function App() {
  return (
    <div className="App">
      <Router>
        <Link spy={true} smooth={true} offset={50} duration={500}>
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/portofolio" component={Portofolio}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route component={FourZeroFour}></Route>
          </Switch>
          <Footer />
        </Link>
      </Router>
    </div>
  );
}

export default App;

import React from "react";
import wolves from "./components/assets/video/holanda.mp4";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header/header.jsx";
import Home from "./pages/home/home";
import Portofolio from "./pages/portofolio/portofolio";
import Contact from "./pages/contact/contact";
import FourZeroFour from "./pages/404/404";

function App() {
  return (
    // <div className="App">
    //   <video
    //     autoPlay
    //     loop
    //     muted
    //     style={{
    //       position: "absolute",
    //       width: "100%",
    //       left: "50%",
    //       top: "50%",
    //       height: "100%",
    //       objectFit: "cover",
    //       transform: "translate(-50%, -50%)",
    //       zIndex: "-1",
    //     }}
    //   >
    //     <source src={wolves} type="video/mp4" />
    //   </video>
    // </div>

    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route exact path="/portofolio" component={Portofolio}>
            {/* <Portofolio /> */}
          </Route>
          <Route exact path="/contact" component={Contact}>
            {/* <Contact /> */}
          </Route>
          <Route component={FourZeroFour}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

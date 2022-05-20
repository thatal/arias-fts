import "./assets/css/argon-dashboard-react.css";
import "./assets/plugins/nucleo/css/nucleo.css";
import React from "react";

// import Header from "./MyComponents/Header";
import NavBars from "./MyComponents/NavBars";
import { Signin } from "./MyComponents/Signin";
import { Signup } from "./MyComponents/Signup";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <NavBars/>
      </div>
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<h1>Home Page</h1>} /> */}
          {/* <Route exact path="page1" element={<Page1 />} /> */}
          <Route exact path="signup" element={<Signup />} />
          <Route exact path="signin" element={<Signin />} />
        </Routes>
        {/* <div className="list">
          <ul>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
            <li>
              <Link to="signin">Sign In</Link>
            </li>
          </ul>
        </div> */}
      </Router>
    </>
  );
}

export default App;

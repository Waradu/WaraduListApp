/*imports*/
import React from "react";
/*import { Routes, Route } from "react-router-dom";*/
/*css*/
import "./Home.css";
/*js*/
/*import Profile from "./profile";
import Settings from "./settings";*/
import Main from "./main";
import Navbar from "./navbar";
import Bottombar from "./bottombar";
/*images*/

function App() {
  return (
    <>
      <Main />
      <Navbar />
      <Bottombar />
    </>
  );
}

/*
<Routes>
        <Route exact path="/" component={<Main />} />
      </Routes>
      <Routes>
        <Route exact path="/Settings" component={<Settings />} />
      </Routes>
      <Routes>
        <Route exact path="/Profile" component={<Profile />} />
      </Routes>
*/

export default App;

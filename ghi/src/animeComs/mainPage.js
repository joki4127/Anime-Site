import React from 'react';

class MainPage extends React.Component {

import React from "react";
import SideBar from "../navData/sidebar/nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../navData/navBar/nav";
import MiniDrawer from "../navData/sidebar/nav";

//import Navbar from "../navBar/nav";

function MainPage() {
  return (
    <div>
      <div></div>
      <NavBar></NavBar>
      <div>
        <MiniDrawer></MiniDrawer>
      </div>
    </div>
  );
}
export default MainPage;

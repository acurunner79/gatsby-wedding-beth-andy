import React from "react";
import Hamburger from "./Hamburger";
import RightNav from "./RightNav";
import '../../styles/nav.css'


const Nav = () => {
  return (
     <div className="_nav">
      <div className="menu-bar">
        <RightNav />
      </div>
        <Hamburger />
     </div>
  );
};

export default Nav;
import React from "react";
import logo from "./logomenu.png";
import "./header.scss";
const HeaderComponent = () => {
  return (
    <header id="header">
      <div id="logo" className="ml-4">
        <img src={logo} width={"100%"} height={"100%"} alt="" />
      </div>
    </header>
  );
};
export default HeaderComponent;

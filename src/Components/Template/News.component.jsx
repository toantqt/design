import React from "react";
import n1 from "./image/n1.jpg";
import n2 from "./image/n2.jpg";
import { Link } from "react-router-dom";
import "./template.scss";
const NewsComponent = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/https://retnews.netlify.app/homepage-v1.html"
        >
          <img src={n1} width="100%" />
          <div className="title-box">
            <span>RET NEW</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://max-themes.net/demos/akea/?storefront=envato-elements"
        >
          <img src={n2} width="100%" />
          <div className="title-box">
            <span>Akea</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NewsComponent;

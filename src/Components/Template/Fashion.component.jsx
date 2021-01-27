import React from "react";
import fashion1 from "./image/fashion1.jpg";
import fashion2 from "./image/fashion2.jpg";
import fashion3 from "./image/fashion3.jpg";
import fashion4 from "./image/fashion4.jpg";
import fashion5 from "./image/fashion5.jpg";
import fashion6 from "./image/fashion6.jpg";

import { Link } from "react-router-dom";
import "./template.scss";
const FashionComponent = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/https://demo.hasthemes.com/clothing-preview/clothing/index.html"
        >
          <img src={fashion1} width="100%" />
          <div className="title-box">
            <span>Clothing</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://landing.engotheme.com/html/nixx/demo/Home1.html"
        >
          <img src={fashion2} width="100%" />
          <div className="title-box">
            <span>NIXX</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/https://demo.hasthemes.com/clothing-preview/clothing/index.html"
        >
          <img src={fashion3} width="100%" />
          <div className="title-box">
            <span>80's Vintage</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://demo.hasthemes.com/zakas-preview/zakas/index.html"
        >
          <img src={fashion4} width="100%" />
          <div className="title-box">
            <span>Zakas</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://demo.hasthemes.com/stinson-preview/stinson/index.html"
        >
          <img src={fashion5} width="100%" />
          <div className="title-box">
            <span>Fashion</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://demo.hasthemes.com/kenne-preview/kenne/index-2.html"
        >
          <img src={fashion6} width="100%" />
          <div className="title-box">
            <span>Kenne</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FashionComponent;

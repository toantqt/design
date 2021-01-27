import React from "react";
import food1 from "./image/food1.jpg";
import food2 from "./image/food2.jpg";
import food3 from "./image/food3.jpg";
import food4 from "./image/food4.jpg";
import food5 from "./image/food5.jpg";
import { Link } from "react-router-dom";
import "./template.scss";
const FoodComponent = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://www.themesindustry.com/html/bistro/?storefront=envato-elements"
        >
          <img src={food1} width="100%" />
          <div className="title-box">
            <span>Food & Restaurant</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://landing.engocreative.com/html/freshfood/demo/home_v1.html"
        >
          <img src={food2} width="100%" />
          <div className="title-box">
            <span>Fresh Food </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://codenpixel.com/demo/foodpicky/index.html"
        >
          <img src={food3} width="100%" />
          <div className="title-box">
            <span>Foodpicky </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://wedesignthemes.com/html/restaurant/bar/index.html"
        >
          <img src={food4} width="100%" />
          <div className="title-box">
            <span>Bar - Cheers </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://htmldemo.hasthemes.com/obrien-preview/obrien/index.html"
        >
          <img src={food5} width="100%" />
          <div className="title-box">
            <span>Organic Food </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FoodComponent;

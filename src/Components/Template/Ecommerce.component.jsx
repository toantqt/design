import React from "react";
import e1 from "./image/e1.jpg";
import e2 from "./image/e2.jpg";
import e3 from "./image/e3.jpg";
import e4 from "./image/e4.jpg";
import e5 from "./image/e5.jpg";
import e6 from "./image/e6.jpg";
import { Link } from "react-router-dom";
import "./template.scss";
const EcommerceComponent = () => {
  return (
    <div className="row ">
      <div className="col-md-4 mt-3 ">
        <Link
          className="box"
          to="/test/http://htmlbeans.com/html/schon/homepage1.html"
        >
          <img src={e1} width="100%" />
          <div className="title-box">
            <span>Schon</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://www.ansonika.com/allaia/index.html"
        >
          <img src={e2} width="100%" />
          <div className="title-box">
            <span>Allaia</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/https://demo.zytheme.com/autoshop/home-1.html"
        >
          <img src={e3} width="100%" />
          <div className="title-box">
            <span>Car Shop</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/http://htmlbeans.com/html/Jewelry/home.html"
        >
          <img src={e4} width="100%" />
          <div className="title-box">
            <span>JEWELRY</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://html.rovadex.com/html-creto/index.html"
        >
          <img src={e5} width="100%" />
          <div className="title-box">
            <span>CRETO</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/http://htmlbeans.com/html/botanical/home.html"
        >
          <img src={e6} width="100%" />
          <div className="title-box">
            <span>BOTANICAL</span>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default EcommerceComponent;

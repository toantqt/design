import React from "react";
import { Link } from "react-router-dom";
import "./template.scss";
import spa1 from "./image/spa1.jpg";
import spa2 from "./image/spa2.jpg";
import spa3 from "./image/spa3.jpg";
import spa4 from "./image/spa4.jpg";
import spa5 from "./image/spa5.jpg";
const SpaComponent = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://www.websroad.com/lemon/index.html"
        >
          <img src={spa1} width="100%" />
          <div className="title-box">
            <span>Lemon - Spa </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://html.cwsthemes.com/relish/index.html"
        >
          <img src={spa2} width="100%" />
          <div className="title-box">
            <span>Relish Spa Salon </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://preview.hasthemes.com/beautyhouse-preivew/beautyhouse/index.html"
        >
          <img src={spa3} width="100%" />
          <div className="title-box">
            <span>Beautyhouse </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/https://apollotran.com/prestashop/leo_cosmetics/en/"
        >
          <img src={spa4} width="100%" />
          <div className="title-box">
            <span>Leo Cosmetics </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-5">
        <Link
          className="box"
          to="/test/http://htmlbeans.com/html/paradise/index.html"
        >
          <img src={spa5} width="100%" />
          <div className="title-box">
            <span>Paradise</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SpaComponent;

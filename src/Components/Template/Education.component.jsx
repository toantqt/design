import React from "react";
import { Link } from "react-router-dom";
import "./template.scss";
import edu1 from "./image/edu1.jpg";
import edu2 from "./image/edu2.jpg";
import edu3 from "./image/edu3.jpg";

const EducationComponent = () => {
  return (
    <div className="row">
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://education-html.themerex.net/index.html"
        >
          <img src={edu1} width="100%" />
          <div className="title-box">
            <span>Education Center</span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link
          className="box"
          to="/test/http://themesflat.com/html/educate/index.html"
        >
          <img src={edu2} width="100%" />
          <div className="title-box">
            <span>Educate </span>
          </div>
        </Link>
      </div>
      <div className="col-md-4 mt-3">
        <Link className="box" to="/test/http://nunforest.com/studiare/">
          <img src={edu3} width="100%" />
          <div className="title-box">
            <span>Studiare</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default EducationComponent;

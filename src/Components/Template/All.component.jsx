import React from "react";
import EcommerceComponent from "./Ecommerce.component";
import FashionComponent from "./Fashion.component";
import FoodComponent from "./Food.component";
import NewsComponent from "./News.component";
import SpaComponent from "../Template/Spa.component";
import EducationComponent from "../Template/Education.component";
import "./template.scss";
const AllComponent = () => {
  return (
    <div>
      <FoodComponent />
      <EcommerceComponent />
      <FashionComponent />
      <NewsComponent />
      <SpaComponent />
      <EducationComponent />
    </div>
  );
};

export default AllComponent;

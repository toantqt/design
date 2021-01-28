import React, { useState } from "react";
import HeaderComponent from "../Header/Header.component";
import EcommerceComponent from "../Template/Ecommerce.component";
import FashionComponent from "../Template/Fashion.component";
import FoodComponent from "../Template/Food.component";
import NewsComponent from "../Template/News.component";
import AllComponent from "../Template/All.component";
import "./home.scss";
import SpaComponent from "../Template/Spa.component";
import EducationComponent from "../Template/Education.component";
const HomeComponent = () => {
  const [selected, setSelected] = useState(1);
  const handleClickSelect = (event, status) => {
    setSelected(status);
  };

  return (
    <div>
      <HeaderComponent />
      <div className="row wrapper mt-4">
        <div className="col-md-3" id="sideBar">
          <ul>
            <li
              className={1 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 1)}
            >
              <div>
                <span>Tất cả các mẫu</span>
              </div>
            </li>
            <li
              className={2 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 2)}
            >
              <div>
                <span>Ăn uống</span>
              </div>
            </li>
            <li
              className={3 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 3)}
            >
              <div>
                <span>Thời trang</span>
              </div>
            </li>
            <li
              className={4 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 4)}
            >
              <div>
                <span>Thương mại điện tử</span>
              </div>
            </li>
            <li
              className={5 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 5)}
            >
              <div>
                <span>Tin tức, blog</span>
              </div>
            </li>
            <li
              className={6 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 6)}
            >
              <div>
                <span>Beauty & Spa</span>
              </div>
            </li>
            <li
              className={7 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 7)}
            >
              <div>
                <span>Khóa học & đào tạo</span>
              </div>
            </li>
            <li
              className={8 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 8)}
            >
              <div>
                <span>Mạng xã hội</span>
              </div>
            </li>
            <li
              className={9 === selected ? "active" : "item"}
              onClick={(event, status) => handleClickSelect(event, 9)}
            >
              <div>
                <span>Thể thao</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-md-9 " id="template">
          {selected === 1 && <AllComponent />}
          {selected === 2 && <FoodComponent />}
          {selected === 3 && <FashionComponent />}
          {selected === 4 && <EcommerceComponent />}
          {selected === 5 && <NewsComponent />}
          {selected === 6 && <SpaComponent />}
          {selected === 7 && <EducationComponent />}
        </div>
      </div>
    </div>
  );
};
export default HomeComponent;

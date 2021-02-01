import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import db from "../../firebase";
import "./template.scss";

const FoodComponent = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    db.collection("list")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().type === "food") {
            setLists((lists) => [
              ...lists,
              {
                name: doc.data().name,
                link: doc.data().link,
                image: doc.data().image,
              },
            ]);
          }
        });
      });
  }, []);
  const list = lists.map((e, index) => {
    return (
      <div className="col-md-4 mt-3" key={index}>
        <Link className="box" to={`/test/${e.link}`}>
          <img src={e.image} width="100%" />
          <div className="title-box">
            <span>{e.name}</span>
          </div>
        </Link>
      </div>
    );
  });
  return <div className="row mt-3">{list}</div>;
};

export default FoodComponent;

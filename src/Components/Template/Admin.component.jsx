import React, { useState } from "react";
import db from "../../firebase";
const AdminComponent = (props) => {
  const initialFieldValues = {
    image: "",
    link: "",
    name: "",
    type: "",
  };

  var [values, setValues] = useState(initialFieldValues);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  console.log(values);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    db.collection("list")
      .add(values)
      .then(function (docRef) {
        alert("success");
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };
  return (
    <div style={{ width: "50%", margin: "0 auto" }}>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="image"
            name="image"
            onChange={handleInputChange}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-mobile-alt"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="link"
              name="link"
              onChange={handleInputChange}
            />
          </div>

          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i className="fas fa-envelope"></i>
              </div>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            placeholder="Type"
            name="type"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="form-contrl">
          <input
            type="submit"
            value="Save"
            className="btn btn-primary btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default AdminComponent;

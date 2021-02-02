import React, { useEffect, useState } from "react";
import db from "../../firebase";
import HeaderComponent from "../Header/Header.component";
import "./Admin.scss";
const AdminComponent = (props) => {
  const initialFieldValues = {
    image: "",
    link: "",
    name: "",
    type: "",
  };

  var [values, setValues] = useState(initialFieldValues);
  const [lists, setLists] = useState([]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    db.collection("list")
      .add(values)
      .then(function (docRef) {
        alert("success");
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  };

  useEffect(() => {
    db.collection("list")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc);

          setLists((lists) => [
            ...lists,
            {
              id: doc.id,
              name: doc.data().name,
              link: doc.data().link,
              image: doc.data().image,
              type: doc.data().type,
            },
          ]);
        });
      });
  }, []);

  const list = lists.map((e, index) => {
    return (
      <tr key={index}>
        <td>
          <img src={e.image} width="140px" height="100px" />
        </td>
        <td>
          <p>{e.name}</p>
        </td>
        <td>
          <p>{e.type}</p>
        </td>
        <td className="link">
          <p>{e.link}</p>
        </td>
        <td>
          <i className="far fa-edit btn"></i>
          <i className="far fa-trash-alt btn"></i>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <HeaderComponent />
      <div className="row mt-5" style={{ width: "90%", margin: "0 auto" }}>
        <div className="col-4">
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
        <div className="col-8 ">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Link</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>{list}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;

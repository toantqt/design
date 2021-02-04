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
  const [edit, setEdit] = useState(false);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      db.collection("list")
        .doc(values.id)
        .update({
          image: values.image,
          link: values.link,
          type: values.type,
          name: values.name,
        })
        .then(function (docRef) {
          alert("Edit success");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    } else {
      db.collection("list")
        .add(values)
        .then(function (docRef) {
          alert("Add success");
        })
        .catch(function (error) {
          console.error("Error adding document: ", error);
        });
    }
  };

  const handleClickSelect = (event, data) => {
    event.preventDefault();
    setEdit(true);
    setValues({
      id: data.id,
      image: data.image,
      link: data.link,
      name: data.name,
      type: data.type,
    });
  };

  const handleClickDelete = (event, data) => {
    event.preventDefault();
    db.collection("list")
      .doc(data.id)
      .delete()
      .then(function (docRef) {
        alert("Delete success");
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
          <i
            className="far fa-edit btn"
            onClick={(event) => {
              handleClickSelect(event, e);
            }}
          ></i>
          <i
            className="far fa-trash-alt btn"
            onClick={(event) => {
              handleClickDelete(event, e);
            }}
          ></i>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <HeaderComponent />
      hihi
      <div className="row mt-5" style={{ width: "90%", margin: "0 auto" }}>
        <div className="col-4">
          <form onSubmit={handleFormSubmit}>
            <div className="form-group input-group">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <i class="fas fa-link"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="link"
                name="link"
                onChange={handleInputChange}
                value={values.link}
              />
            </div>
            <div className="form-row">
              <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i class="far fa-image"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="image"
                  name="image"
                  onChange={handleInputChange}
                  value={values.image}
                />
              </div>

              <div className="form-group input-group col-md-6">
                <div className="input-group-prepend">
                  <div className="input-group-text">
                    <i class="fas fa-signature"></i>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  name="name"
                  onChange={handleInputChange}
                  value={values.name}
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Type"
                name="type"
                onChange={handleInputChange}
                value={values.type}
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

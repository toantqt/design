import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { fireDb } from "../../firebase";
import HeaderComponent from "../Header/Header.component";
import "./login.scss";

const LoginComponent = () => {
  const infor = {
    email: "",
    password: "",
  };
  const [account, setAccount] = useState(infor);
  const history = useHistory();

  const handleChangeInput = (event) => {
    event.preventDefault();
    let { name, value } = event.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    fireDb
      .auth()
      .signInWithEmailAndPassword(account.email, account.password)
      .then(() => {
        history.push("/admin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const authListener = () => {
    fireDb.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  return (
    <div>
      <HeaderComponent />
      <div class="form mt-5">
        <form class="login-form" onSubmit={handleSubmitLogin}>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={handleChangeInput}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChangeInput}
          />
          <button type="submit">Đăng nhập</button>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;

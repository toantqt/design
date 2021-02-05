import React from "react";
import { Route, Redirect, HashRouter } from "react-router-dom";
import HomeComponent from "./Components/Home/Home.component";
import PreviewComponent from "./Components/Preview/Preview.component";
import AdminComponent from "./Components/Admin/Admin.component";
import LoginComponent from "./Components/Login/Login.component";
import { isLoggedIn } from "./Auth";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route
        path="/admin"
        render={() =>
          isLoggedIn() ? <AdminComponent /> : <Redirect to="/login" />
        }
      ></Route>
      <Route path="/login" component={LoginComponent}></Route>
      <Route
        path="/test/:link"
        render={(match) => <PreviewComponent link={match} />}
      ></Route>
    </HashRouter>
  );
}
export default App;

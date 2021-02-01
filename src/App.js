import React from "react";
import { Route, HashRouter } from "react-router-dom";
import HomeComponent from "./Components/Home/Home.component";
import PreviewComponent from "./Components/Preview/Preview.component";
import AdminComponent from "./Components/Template/Admin.component";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route path="/admin" component={AdminComponent}></Route>
      <Route
        path="/test/:link"
        render={(match) => <PreviewComponent link={match} />}
      ></Route>
    </HashRouter>
  );
}
export default App;

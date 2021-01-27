import React from "react";
import { Route, HashRouter} from "react-router-dom";
import HomeComponent from "./Components/Home/Home.component";
import PreviewComponent from "./Components/Preview/Preview.component";
function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={HomeComponent}></Route>
      <Route
        path="/test/:link"
        render={(match) => <PreviewComponent link={match} />}
      ></Route>
    </HashRouter>
  );
}
export default App;

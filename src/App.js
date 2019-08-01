import React, {useState} from "react";
import "./App.css";
import Header from "./component/header/Header";
import Footer from "./component/footer/Footer";
import { Router, Route, Redirect, Switch } from "react-router-dom";
import Frontpage from "./component/frontpage/Frontpage";
import Test from "./component/frontpage/Test";
import { createBrowserHistory } from "history";
import Starterpage from "./Main/Starterpage";
import AddContent from "./component/AddContent/AddContent";
import Dashboard from "./component/dashboard/Dashboard";

const history = createBrowserHistory();

const routes =
  localStorage.getItem("Token") === null ? (
    <Route path="/" component={Frontpage} />
  ) : (
    <div>
      <Switch>
        <Route exact path="/" component={Frontpage} />
        <Route exact path="/starter" component={Starterpage} />
        <Redirect exact from="/" to="/" />
        <Route exact path="/test" component={Test} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
      <AddContent />
    </div>
  );
  
  function App() {
    const [reload, useReload] = useState("")
    
    const forceReload = () => {
      
    };

  return (
    <div className="App">
      <Router history={history}>
        <Header history={history} forceReload={forceReload} />
        {routes}
        <Footer />
      </Router>
    </div>
  );
}

export default App;

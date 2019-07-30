import React from 'react';
import "./App.css";
import Header from "./component/Header";
import Footer from './component/Footer';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";


function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>


          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;

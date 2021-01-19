// src/App.jsx
import React, { Component } from "react";
import AppSwitch from "./components/appSwitch";
import Chicken from "./components/_chicken"
import Products from "./components/_products"
import Persons from "./components/_persons"
import GenderPrediction from "./components/_genderPrediction"
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  render() {
    return (
      
      <Router>
        <AppSwitch />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/chicken" component={Chicken} />
          <Route path="/products" component={Products} />
          <Route exact path="/persons" component={Persons} />
          <Route path="/persons/gender-prediction/:name" component={GenderPrediction} />
        </Switch>
      </Router>
    )
  }
}

function Home() {
  return(
    <h1>Home page</h1>
  )
}

export default App;

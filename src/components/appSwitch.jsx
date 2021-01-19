import React, { Component } from "react";
import { 
  Link,
} from "react-router-dom";

class AppSwitch extends Component {
  render() {
    return (
        <nav>
          <ul className="nav nav-tabs">
            <li className="nav-item mr-3"><Link to="/">Home</Link></li>
            <li className="nav-item mr-3"><Link to="/chicken">Chicken</Link></li>
            <li className="nav-item mr-3"><Link to="/products">E-commerce</Link></li>
            <li className="nav-item mr-3"><Link to="/persons">Persons</Link></li>
          </ul>
        </nav>
    );
  }
}

export default AppSwitch;

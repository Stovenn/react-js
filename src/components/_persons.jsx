import React, { Component } from "react";
import { Link } from "react-router-dom";

class Persons extends Component {
  state = {
    persons: [],
  };

  async componentDidMount() {
    await fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ persons: data.results });
      });
  }

  render() {
    return (
      <ul>
        {this.state.persons.map((person, index) => (
          <li key={index}>
            <Link to={`/persons/gender-prediction/${person.name.first}`}>{person.name.first} {person.name.last}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Persons;

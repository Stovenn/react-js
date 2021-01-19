import React, { Component } from "react";

class GenderPrediction extends Component {
  state = {
    gender: null,
  };

  async componentDidMount() {
    await fetch(`https://api.genderize.io/?name=${this.props.match.params.name}`)
      .then((response) => response.json())
      .then(({ gender }) => {
        this.setState({ gender });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h3>
          Name: {this.props.match.params.name}; Gender:
          <u>{this.state.gender}</u>
        </h3>
      </React.Fragment>
    );
  }
}

export default GenderPrediction;

import React, { Component } from 'react';
import NavBar from './NavBar';
import {Input, Jumbotron} from 'reactstrap';
import Places from './Places';
import './formuserdetails.css'

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
      <NavBar />
      <Jumbotron className="cover">
        <h1>MyHouse</h1>
        <h2>Home valuation precision</h2>
          <Places onChange={handleChange} />
      </Jumbotron>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default FormUserDetails;

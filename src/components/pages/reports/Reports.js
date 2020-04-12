/**
 * file     : Home.js
 * author   : apagadorjr
 */
import React, { Component } from "react";
import "./Reports.css";

/**
 * 
 */
export default class Reports extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }

  render() {
      return (
        <div className="Home">
          <div className="lander">
            <h1>Reports</h1>
          </div>
        </div>
      );
  }
}

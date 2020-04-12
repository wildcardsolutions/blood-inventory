/**
 * file     : Home.js
 * author   : apagadorjr
 */
import React, { Component } from "react";
import "./Settings.css";

/**
 * 
 */
export default class Settings extends Component {
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
            <h1>Settings</h1>
          </div>
        </div>
      );
  }
}

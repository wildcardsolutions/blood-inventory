/**
 * file     : Home.js
 * author   : apagadorjr
 */
import React, { Component } from "react";
import "./Home.css";

/**
 * 
 */
export default class Home extends Component {
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
            <h1>Scratch</h1>
            <p>A simple note taking app</p>
          </div>
        </div>
      );
  }
}

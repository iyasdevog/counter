import react from "react";
import React, { Component } from "react";
import "./../scss/main.scss";
class navbar extends Component {
  state = {};
  render() {
    return (
      <react.Fragment>
        <nav>
          <div className="brand">Counter</div>
          <div className="numCounter">cart : {1}</div>
        </nav>
      </react.Fragment>
    );
  }
}

export default navbar;

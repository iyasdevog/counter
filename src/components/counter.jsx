import react from "react";
import React, { Component } from "react";
class counter extends Component {
  render() {
    return (
      <react.Fragment>
        <div className="container">
          <div className={`color ${this.checkClass()}`}>
            {this.checkNumber()}
          </div>
          <button
            className="increment"
            onClick={() => this.props.onIncrement(this.props.counters)}
          >
            increment
          </button>
          <button
            className="delete"
            onClick={() => this.props.onDelete(this.props.counters.value)}
          >
            delete
          </button>
        </div>
      </react.Fragment>
    );
  }
  checkNumber() {
    const { value } = this.props.counters;
    return value === 0 ? "zero" : value;
  }
  checkClass() {
    const { value } = this.props.counters;
    return value === 0 ? "color-blue" : "color-yellow";
  }
}

export default counter;

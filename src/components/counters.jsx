import React, { Component } from "react";
import Counter from "./counter";
import "./../scss/_counter.scss";
class counters extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="reset" onClick={() => this.props.onReset()}>
          reset
        </div>
        {this.props.Counters.map((counter, i) => (
          <Counter
            key={i}
            counters={counter}
            onIncrement={this.props.onIncrement}
            onDelete={this.props.onDelete}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default counters;

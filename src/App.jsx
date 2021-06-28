import react, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state = {
    Counters: [
      { value: 4, id: 1 },
      { value: 0, id: 2 },
      { value: 2, id: 3 },
      { value: 0, id: 4 },
    ],
  };
  handleIncrement = (counter) => {
    //alwaays use arrow function to get this surrounding otherwise it will give this props
    const counters = [...this.state.Counters];
    const index = counters.indexOf(counter);

    counters[index] = counter.value++;

    // counters[index] = { ...counter };
    // console.log(counters[index]);
    // counters[index].value++;
    console.log(counters);
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = [...this.state.Counters];
    const count = counters.filter((el) => el.value !== counter);
    console.log(count);
    this.setState({});
  };
  handleReset = () => {
    const counters = [...this.state.Counters];
    const counter = counters.map((el) => (el.value = 0));
    this.setState({ counter });
  };

  render() {
    return (
      <react.Fragment>
        <Navbar />
        <main>
          <Counters
            Counters={this.state.Counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </react.Fragment>
    );
  }
}

export default App;

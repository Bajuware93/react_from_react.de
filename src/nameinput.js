import React, { Component} from "react";
import "./App.css";

class Nameinput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', names: ['test', 'test2'] };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    this.props.handleSubmit(this.state.value);
    this.setState(prevState => ({
      names: [...prevState.names, this.state.value]
    }))
    this.setState({value: ''});
  }

  render() {
    const listItems = this.state.names.map((number) =>
    <li>{number}</li>
);

    return (
      <form onSubmit={this.handleSubmit} >
        <label>
          Name:
          <input type="text" name="name" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit"/>
        <p>{this.state.value}</p>
        <ul>{listItems}</ul>,
      </form>
    );
  }
}

export default Nameinput;

import React, { Component} from "react";
import "./App.css";
import Nameinput from "./Nameinput";

class App extends Component{
  constructor(props){
    super(props);
    this.state = {name: 'World'};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(val){
    this.setState({
      name: val
    });
  }

  render(){
    return(
      <div className="App">
        <h1> Hello, {this.state.name}! </h1>
        <Nameinput handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
require("bootstrap/dist/css/bootstrap.min.css");
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Permutations from "./components/permutations";
import Navbar from "./components/navbar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      permutations: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.proceed = this.proceed.bind(this); 
    this.workerCallback = this.workerCallback.bind(this);
  }

  handleInput(e) {
    this.setState({ term: e.target.value });
  }

  workerCallback(e) {
    this.setState({ permutations: e.data });
    
    //terminate worker
    e.currentTarget.terminate();
  }

  proceed() {
    var worker;
    if(typeof(Worker) !== "undefined") {
      worker = new Worker("worker.js");
      worker.postMessage(this.state.term);
      worker.onmessage = this.workerCallback;
    } else {
      console.log("This browser does not support web workers");
    }
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Navbar />
        <div className="page-header"></div>
        <Header />
        <Form 
          handleInput={this.handleInput} 
          term={this.state.term} 
          handleClick={this.proceed}
          handleSubmit={this.handleSubmit}
        />
        {
          this.state.permutations 
          &&
          <Permutations permutations={this.state.permutations}/>
        }
      </div>
    );
  }
}

export default App;

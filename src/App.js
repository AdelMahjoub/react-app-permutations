import React, { Component } from 'react';
require("bootstrap/dist/css/bootstrap.min.css");
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Permutations from "./components/permutations";
import Navbar from "./components/navbar";
import ProcessIndicator from "./components/process_indicator";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "", // input string
      permutations: null, // array oftotal permutations 
      processing: false, // become true when web worker runs
    }
    this.worker = new Worker("worker.js");
    this.handleInput = this.handleInput.bind(this);
    this.proceed = this.proceed.bind(this); 
    this.workerCallback = this.workerCallback.bind(this);
    this.stopWorker = this.stopWorker.bind(this);
  }

  handleInput(e) {
    this.setState({ term: e.target.value });
  }

  workerCallback(e) {
    console.time("New state set");
    this.setState({ permutations: e.data, processing: false });
    console.timeEnd("New state set");
  }

  handleError() {
    this.setState({ permutations: ["Your browser does not support Web Workers"] });
  }

  proceed() {
    this.setState({ processing: true });
    if(typeof(Worker) !== "undefined") {
      this.worker.postMessage(this.state.term);
      this.worker.onmessage = this.workerCallback;
    } else {
      this.handleError();
    }
  }

  stopWorker() {
    this.worker.terminate();
    this.worker = new Worker("worker.js");
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
          this.state.processing
          &&
          <ProcessIndicator handleStop={this.stopWorker}/>
        }
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

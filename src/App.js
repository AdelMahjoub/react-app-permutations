import React, { Component } from 'react';
require("bootstrap/dist/css/bootstrap.min.css");
import './App.css';
import Header from "./components/header";
import Form from "./components/form";
import Permutations from "./components/permutations";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      permutations: null
    }
    this.handleInput = this.handleInput.bind(this);
    this.findPermutations = this.findPermutations.bind(this);
  }

  handleInput(e) {
    this.setState({ term: e.target.value });
  }

  findPermutations() {
    var arr = this.state.term.split('');
    var permutArr = [];
    var temp, position = 0, len = this.state.term.length - 1;
    function permutation(position, len){
        if(position === len){
            permutArr.push(arr.map(function(val){return val;}).join(''));
        }else{
            for(var i = position; i<= len; i++){
                temp = arr[i];
                arr[i] = arr[position];
                arr[position] = temp;
                permutation(position+1,len);
                temp = arr[i];
                arr[i] = arr[position];
                arr[position] = temp;
            }
        }
    }
    permutation(position,len);
    this.setState({ permutations: permutArr });
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Form 
          handleInput={this.handleInput} 
          term={this.state.term} 
          handleClick={this.findPermutations}
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

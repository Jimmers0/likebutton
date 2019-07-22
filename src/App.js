import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './main.css';


class App extends Component {



  add = (e) => {

    e.preventDefault();
      this.setState({
      counter: this.state.counter + 1,
})
  console.log(this.state.counter + 1)

  if (this.state.counter + 1 === 1) {
    this.setState({
      like: this.state.like = "like"
    }) 
  } else {
    this.setState({
      like: this.state.like = "likes"
    })
  }
  }

  state = {
    counter: 0,
    like: "likes"
  }

  render(){
    return (
      <div>
       <button onClick={this.add}>{this.state.counter} {this.state.like}</button>
       

      </div>
    )
  }
}

export default App;

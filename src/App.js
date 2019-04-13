import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      sapa : 'Ganti Tema',
      backgroundColor : 'Grey'
    }
  } 
  clicked = () => {
    if(this.state.sapa === 'Theme Dark'){
      //console.log("tru Theme Dark")
      document.body.style.backgroundColor = 'Aqua'
      this.setState(
        {
          sapa : 'Theme Light',
          backgroundColor : 'Aqua'
        }
      );
    } else{
      document.body.style.backgroundColor = 'Grey'
      this.setState(
        {
          sapa : 'Theme Dark',
          backgroundColor : 'Grey'
        },
        
      );
    }
    
    
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.sapa}</h1>
          <button className="btn btn-primary btn-lg active" aria-pressed="true" onClick={this.clicked}>Ganti Tema</button>
      </div>
    );
  }
}

export default App;

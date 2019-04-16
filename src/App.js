import React, { Component } from 'react';
import Players from './players/Players';
import './App.css';

class App extends Component {
  state = {greeting: 'No greeting for you!', 
farewell: 'No byes for you!', 
players: [
  {id: 1, 
  name: 'Elan'}, 
  {id: 2, 
  name: 'Lloyd'}, 
  {id: 3,
  name: 'Lydia'},
  {id: 4, 
  name: 'Megan'}
]};

  greet = e => {
    e.preventDefault();
    this.setState({greeting: 'Hello Web Students'})
  } 

  farewell = e => {
    e.preventDefault();
    this.setState({
      farewell: 'Bye Web Students'
    })
  }

  render() {
    return (
      <div className="App">
          <p>
            Hello World
          </p>
        <Players players={this.state.players} />
        <p>{this.state.farewell}</p>
        <button onClick={this.greet}>Greet!</button>
        <p>{this.state.greeting}</p>
      <button onClick={this.farewell}>Say Bye!</button>
      
      </div> 
    );
  }

  
}

export default App;

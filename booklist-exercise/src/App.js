import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      myName: 'Luis',
      monsters: [
        {
          name: 'Zombie'
        },
        {
          name: 'Vampire'
        },
        {
          name: 'Werewolf'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            { this.state.monsters.map((monster, index) => {
              return <h1 key={index}>
                {monster.name}
              </h1>
            }) }
          </p>
        </header>
      </div>
    )
  }
}


export default App;

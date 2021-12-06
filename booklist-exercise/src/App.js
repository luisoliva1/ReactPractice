import React, { Component } from 'react'
import './App.css';
import { BookSearchView } from "./components/BookSearchView";

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
          {
            this.state.monsters.map((monster, index) => {
              return <h1 key={index}>
                {monster.name}
              </h1>
            })
          }

          <BookSearchView />
        </header>
      </div>
    )
  }
}


export default App;

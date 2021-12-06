import React, { Component } from 'react'
import './App.css';
import { BookSearchView } from "./components/BookSearchView";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <BookSearchView />
        </header>
      </div>
    )
  }
}


export default App;

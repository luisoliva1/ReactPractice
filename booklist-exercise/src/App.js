import React, {Component} from 'react'
import './App.css';
import {BookSearchView} from "./components/BookSearchView";

class App extends Component {
  render() {
    return (
      /*className="App"*/
      <div>
        {/*className="App-header"*/}
        <header>
          <BookSearchView/>
        </header>
      </div>
    )
  }
}


export default App;

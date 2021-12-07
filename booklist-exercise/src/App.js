import React, { Component } from 'react'
import './App.css'
import { BookSearchView } from './components/BookSearchView'

class App extends Component {
    render() {
        return (
            <div className="App">
                <BookSearchView />
            </div>
        )
    }
}

export default App

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import Challenge from './Challenge'
import Editor from './Editor'
import Tests from './Tests'
import Output from './Output'

class App extends Component {
  render() {
    return (
      <div className="App flex-grid">
        <div className="col">
          <Challenge />
          <Tests />
        </div>
        <div className="col">
          <Editor />
          <Output />
        </div>
      </div>
    )
  }
}

export default App

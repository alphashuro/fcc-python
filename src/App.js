import React, { Component } from 'react'
import './App.css'

import Challenge from './Challenge'
import Editor from './Editor'
import Tests from './Tests'
import Output from './Output'

class App extends Component {
  state = {
    code: ''
  }

  constructor(props) {
    super(props)
    this.handleCodeChanged = this.handleCodeChanged.bind(this)
    this.handleRunClicked = this.handleRunClicked.bind(this)
  }

  handleCodeChanged(code) {
    this.setState({ code })
  }

  handleRunClicked() {
    console.log(this.state.code)
  }

  render() {
    return (
      <div className="App flex-grid">
        <div className="col">
          <Challenge />
          <Tests />
        </div>
        <div className="col">
          <Editor
            onChange={this.handleCodeChanged}
            onRun={this.handleRunClicked}
          />
          <Output />
        </div>
      </div>
    )
  }
}

export default App

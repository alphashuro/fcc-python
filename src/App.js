import React, { Component } from 'react'
import './App.css'

import Challenge from './Challenge'
import Editor from './Editor'
import Tests from './Tests'
import Output from './Output'
import { compile } from './compiler'

class App extends Component {
  state = {
    code: '',
    output: ''
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
    compile(this.state.code)
      .scan((a, b) => a + '\n' + b)
      .subscribe(output => this.setState({ output }), console.error)
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
          <Output text={this.state.output} />
        </div>
      </div>
    )
  }
}

export default App

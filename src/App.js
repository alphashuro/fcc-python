import React, { Component } from 'react'
import './App.css'

import Challenge from './Challenge'
import Editor from './Editor'
import Tests from './Tests'
import Output from './Output'
import { compile } from './compiler'

const test = `
import unittest

class TestImportNumpy(unittest.TestCase):
    def test_import_numpy(self):
      self.assertIsNotNone(numpy)

unittest.main()
`

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
    compile(this.state.code + test)
      .scan((a, b) => a + b)
      .subscribe(
        output => this.setState({ output }),
        error => this.setState({ output: error.message })
      )
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

import React from 'react'
import CodeMirror from 'react-codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/python/python'

const options = {
  lineNumbers: true,
  autoFocus: true,
  mode: 'python'
}

export default ({ text, onChange, onRun }) =>
  <div>
    <h2>Editor</h2>

    <CodeMirror value={text} onChange={onChange} options={options} />
    <button onClick={onRun}>Run</button>
  </div>

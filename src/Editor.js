import React from 'react'

export default ({ text, onChange, onRun }) =>
  <div>
    <h2>Editor</h2>
    <textarea
      name="code"
      id="code"
      cols={30}
      rows={10}
      value={text}
      onChange={({ target: { value: text } }) => onChange(text)}
    />
    <button onClick={onRun}>Run</button>
  </div>

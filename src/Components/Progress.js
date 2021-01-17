import React, { useState } from 'react'
import '../../src/styles/Progress.css'

function Progress(props) {
  const [visible, setVisible] = useState(false)
  const toggleSelect = () => setVisible(!visible)
  const onChangeProgress = (event) => {
    setVisible(false)
    props.onChangeProgress(event)
  }
  return (
    <div className='board '>
      <div className='board-title'>{props.title}</div>
      <ul className='list'>
        {props.tasks.map((task, key) => (
          <li key={key}>
            {key + 1}.&nbsp; {task}
          </li>
        ))}
      </ul>
      {visible && (
        <select className='select' onChange={onChangeProgress}>
          {props.readyArray.map((item, ind) => (
            <option key={ind}>{item}</option>
          ))}
        </select>
      )}
      {!visible && (
        <button
          className='buttons__button buttons__button--add'
          onClick={toggleSelect}
        >
          Select
        </button>
      )}
    </div>
  )
}
export default Progress

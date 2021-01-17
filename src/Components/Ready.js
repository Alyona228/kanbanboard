import React, { useState } from 'react'

import '../../src/styles/Ready.css'

function Ready(props) {
  const [visible, setVisible] = useState(false)
  const toggleSelect = () => setVisible(!visible)
  const onChangeSelect = (event) => {
    setVisible(false)
    props.onChangeSelect(event)
  }
  return (
    <div className='board'>
      <div className='board-title'>{props.title}</div>
      <ul className='list'>
        {props.readyArray.map((task, key) => (
          <li key={key}>
            {key + 1}.&nbsp; {task}
          </li>
        ))}
      </ul>
      {visible && (
        <select className='select' onChange={onChangeSelect}>
          {props.tasks.map((item, ind) => (
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

export default Ready

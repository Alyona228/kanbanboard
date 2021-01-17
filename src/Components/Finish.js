import React, { useState } from 'react'
import '../styles/Finish.css'

function Finish(props) {
  const [visible, setVisible] = useState(false)
  const toggleselect = () => setVisible(!visible)
  const onChangeFinish = (event) => {
    props.onChangeFinish(event)
  }

  return (
    <div className='board board__finish'>
      <div className='board-title'>{props.title}</div>
      <ul className='list'>
        {props.finishArray.map((task, key) => (
          <li key={key}>
            {key + 1}.&nbsp; {task}
          </li>
        ))}
      </ul>
      {visible && (
        <select className='select' onChange={onChangeFinish}>
          {props.progress.map((item, ind) => (
            <option key={ind}>{item}</option>
          ))}
        </select>
      )}
      {!visible && (
        <button
          className='buttons__button buttons__button--add'
          onClick={toggleselect}
        >
          Select
        </button>
      )}
      <button
        className='buttons__button buttons__button--add'
        onClick={props.deletFinish}
      >
        Delete
      </button>
    </div>
  )
}
export default Finish

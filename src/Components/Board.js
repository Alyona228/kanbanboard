import React from 'react'
import '../styles/Board.css'

function Board(props) {
  return (
    <div className='board'>
      <div className='board-title'>{props.title}</div>

      <ul className='list'>
        {props.tasks.map((item, key) => (
          <li key={key}>
            {key + 1}. &nbsp;{item}
          </li>
        ))}
      </ul>
      {props.showInput && props.hasInput ? (
        <input
          className='new-task-input'
          value={props.ttt}
          onBlur={props.iii}
          onChange={props.onChange}
          onKeyDown={props.onKeyDown}
        ></input>
      ) : undefined}
      <button
        className='buttons__button buttons__button--add'
        onClick={props.handleClickAdd}
      >
        +Add card
      </button>
    </div>
  )
}

export default Board

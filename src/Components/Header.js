import React, { useState } from 'react'
import '../styles/Header.css'
import avatar from '../images/user-avatar.svg'
import arrow from '../images/arrow-down.svg'

function Header(props) {
  let [visable, setVisable] = useState(false)
  let toggleselect = () => setVisable(!visable)
  let onChangeSelect = (event) => {
    setVisable(false)
  }
  return (
    <div className='header'>
      <div>
        <h1 className='header__title'>Awesome Kanban Board</h1>
      </div>
      <div className='header__avatar'>
        <img src={avatar} alt='это аватар' />
      </div>

      <button className='header__button' onClick={toggleselect}>
        <img src={arrow} alt='это аватар' className='header__arrow' />
      </button>

      {!visable && (
        <div className='menu'>
          <div className='menu_text'></div>
          <div className='menu_text'></div>
          <div className='menu_text'></div>
        </div>
      )}
    </div>
  )
}

export default Header

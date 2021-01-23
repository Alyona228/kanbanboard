import React, { useState } from 'react'
import '../styles/Header.css'
import avatar from '../images/user-avatar.svg'
import arrow from '../images/arrow-down.svg'

function Header(props) {
  const [visable, setVisable] = useState(false)
  const togleselect = () => setVisable(!visable)

  return (
    <div className='header'>
      <div>
        <h1 className='header__title'>Awesome Kanban Board</h1>
      </div>
      <div className='header__avatar'>
        <img src={avatar} alt='это аватар' />
      </div>

      <button className='header__button'>
        <img src={arrow} alt='это аватар' className='header__arrow' />
      </button>
      <div className='menu'>
        <div className='menu_text'></div>
        <div className='menu_text'></div>
        <div className='menu_text'></div>
      </div>
    </div>
  )
}

export default Header

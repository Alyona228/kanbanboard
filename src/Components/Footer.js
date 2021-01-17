import React from 'react'
import '../styles/Footer.css'
function Footer(props) {
  return (
    <div className='footer'>
      <div className='footer__left'>
        Active tasks: &#8249; {props.a} &#8250;
      </div>
      <div className='footer__center'>
        Finished tasks: &#8249;{props.f} &#8250;{' '}
      </div>
      <div className='footer__right'>Kanban board by Алёна, 2020</div>
    </div>
  )
}
export default Footer

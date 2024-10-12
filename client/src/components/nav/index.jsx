import React from 'react'
import './style.scss'

const Nav = ({logo = 'Ruslan' ,...props}) => {
  return (
    <header>
      <h1>{logo}</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>
      <button>{props.btnText}</button>
    </header>
  )
}

export default Nav

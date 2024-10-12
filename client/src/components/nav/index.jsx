import React from 'react'
import './style.scss'

const Nav = (props) => {
  return (
    <header>
      <h1>{props.logo}</h1>
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

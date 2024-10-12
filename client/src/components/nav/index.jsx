import React from 'react'
import './style.scss'

const Nav = ({logo = 'Ruslan' ,...props}) => {
  const links = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
  ]



  return (
    <header>
      <h1>{logo}</h1>
      <nav>
        {
          links.map((item,index) => {
            return <a key={index} href={item.href}>{item.title}</a>
          })
        }
      </nav>
      <button>{props.btnText}</button>
    </header>
  )
}

export default Nav

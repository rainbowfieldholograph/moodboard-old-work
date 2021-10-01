import React from 'react'
import { Link } from 'react-router-dom'
import headerImg from '../../img/header-img.svg'
import '../../Styles.css'

const Header = () => {
  return (
    <div className="container">
      <header className="header">
        <Link to="/">
          <div className="header__text">MoodBoard</div>
        </Link>

        <img style={{ cursor: 'pointer' }} src={headerImg} alt="User" />
      </header>
    </div>
  )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import loginImg from '../../img/login-img.svg'
import '../../Styles.css'

const Login = () => {
  return (
    <div className="container">
      <div className="login">
        <img className="login__img" src={loginImg} alt="" />
        <form action="" className="login__form">
          <input className="login__input-login" type="text" placeholder="Login" />
          <input className="login__input-pass" type="text" placeholder="Password" />
          <Link to="photos">
            <button className="login__button">Sign in</button>
          </Link>
          <button className="login__button">Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default Login

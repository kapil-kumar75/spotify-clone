import React from 'react'
import './Login.css'
import { loginUrl } from './Spotify'
import Image from './spotify.png'

const Login = () => {
  return (
    <div className="login">
      <img src={Image} alt="spotify logo"/>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login

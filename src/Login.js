import React from 'react';
import { loginUrl } from './spotify';
import './Login.css';
import MyImage from './musicMatchLogo.png'

function Login() {
  return (
    <div className="login">
      <img src={MyImage} alt=""></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login 
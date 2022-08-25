import React from 'react';
import { loginUrl } from './spotify';
import './Login.css';

function Login() {
  return (
    <div className="login">
      <img src='musicMatchLogo.png' alt=""></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login 
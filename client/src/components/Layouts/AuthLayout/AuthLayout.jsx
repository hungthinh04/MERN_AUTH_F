import React, { useState } from "react";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import "./authLayout.css";
import Forgot from './../../Forgot/Forgot';

export default function AuthLayout() {

  const [login,setLogin]=useState(true)
  const [register,setRegister]=useState(false)
  const [forgot,setForgot]=useState(false)

  const handleLogin = ()=>{
    setLogin(true)
    setRegister(false)
    setForgot(false)
  }
  const handleRegister = ()=>{
    setLogin(false)
    setRegister(true)
    setForgot(false)
  }
  const handleForgot = ()=>{
    setLogin(false)
    setRegister(false)
    setForgot(true)
  }

  return (
    <div className="authLayout">
      {/* logo */}
      <div className="authLayout_Logo">
        <img src="./assets/img/spaceship.svg" alt="auth_logo" />
      </div>
      {/* form */}
      {login && <Login/>}
      {register && <Register/>}
      {forgot && <Forgot/>}
      {/* actions */}
      <div className="authLayout_Actions">
        <p className="authLayout_Actions_l"
        onClick={login ? handleRegister:handleLogin}>{login ? "Register ?":"Login ?"}</p>
        <p className="authLayout_Actions_r" onClick={handleForgot}>Forgot ?</p>
      </div>
    </div>
  );
}

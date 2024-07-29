import React from "react";
import Login from "../../Login/Login";
import "./authLayout.css";

export default function AuthLayout() {
  return (
    <div className="authLayout">
      {/* logo */}
      <div className="authLayout_Logo">
        <img src="./assets/img/spaceship.svg" alt="auth_logo" />
      </div>
      {/* form */}
      <Login />

      {/* actions */}
      <div className="authLayout_Actions">
        <p className="authLayout_Actions_l">register ?</p>
        <p className="authLayout_Actions_r">login ?</p>
      </div>
    </div>
  );
}

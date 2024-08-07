import React, { useState } from "react";
import "./login.css";
import Input from "../Input/Input";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
export default function Login() {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(!visible);
  };

  return (
    <form className="login">
      <Input type="email" text="Email" />
      <Input
        type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Password"
        handleClick={handleClick}
      />
      <div className="login_btn">
        <button>login</button>
        <button className="btn-alt">
          sign in google <FcGoogle />
        </button>
      </div>
    </form>
  );
}

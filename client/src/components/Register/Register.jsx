import Input from '../Input/Input'
import {FcGoogle} from 'react-icons/fc'
import {MdVisibility} from 'react-icons/md'
import {MdVisibilityOff} from 'react-icons/md'
import React, { useState } from 'react'

export default function Register() {

    const [visible,setVisible] = useState(false);
    const handleClick=()=>{
    setVisible(!visible)
    }

  return (
    <form action="">
        <Input type="text" text="Name"></Input>
        <Input type="email" text="Email"></Input>
        <Input type={visible ? 'text': 'password'}
      icon={visible ? <MdVisibility/> : <MdVisibilityOff/>}
      text="Password"
      handleClick={handleClick}/>
        <Input type={visible ? 'text': 'password'}
      icon={visible ? <MdVisibility/> : <MdVisibilityOff/>}
      text="Confirm Password"
      handleClick={handleClick} />
      <div className="login_btn">
        <button>register</button>
      </div>
    </form>
  )
}

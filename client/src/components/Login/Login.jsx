import React from 'react'
import './login.css'
import Input from '../Input/Input'
import {FcGoogle} from 'react-icons/fc'
import {MdVisibility} from 'react-icons/md'
import {MdVisibilityOff} from 'react-icons/md'
export default function Login() { 
  return (
    <form className='login'>
      <Input type="email" text="Email"/>
      <Input type="password" text="Password"/>
        <div className="login_btn">
          <button>login</button>
          <button className='btn-alt'>
            sign in google <FcGoogle/>

          </button>
        </div>

    </form>
  )
}

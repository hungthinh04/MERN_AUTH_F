import Input from "../Input/Input"
import {MdVisibility} from 'react-icons/md'
import {MdVisibilityOff} from 'react-icons/md'
import React ,  {useState} from 'react'

export default function Reset() {
  
    const [visible,setVisible] = useState(false)
    const handleClick=()=>
    {
      setVisible(!visible)
    }

  return (
   <form action="">
    <Input text="Password"  type={visible ? 'text': 'password'}
      icon={visible ? <MdVisibility/> : <MdVisibilityOff/>}
    
      handleClick={handleClick}/>
    <Input text="Confirm Password" type={visible ? 'text': 'password'}
      icon={visible ? <MdVisibility/> : <MdVisibilityOff/>}

      handleClick={handleClick}/>
   </form>
  )
}

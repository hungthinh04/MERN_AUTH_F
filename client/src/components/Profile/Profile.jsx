
import React, { useRef ,useState } from 'react'
import {AiFillCamera} from 'react-icons/ai'
import Avatar from '../Avatar/Avatar';
import Input from '../Input/Input';
import './profile.css'
import { MdVisibility } from "react-icons/md";
import { MdVisibilityOff } from "react-icons/md";
export default function Profile() {

    const inputFile =  useRef(null);
    const [visible, setVisible] = useState(false);
    
    const handleInput = () =>{
        inputFile.current.click()
    }


    const handleClick = () => {
      setVisible(!visible);
    };
  return (
    <div className="profile">
        {/* avatar */}
        <div className="profile_avatar">
            <div className="profile_avatar-wrapper" onClick={handleInput}>
                <Avatar/>
                <AiFillCamera/>
            </div>
            <input type="file" name='avatar' ref={inputFile} className='profile_avatar-input' />
        </div>

        {/* form */}
        <form action="" className="profile_input">
            <div className="profile_input-form">
                <Input type="text" text="Name"></Input>
                <Input type="text" text="Email"></Input>
                <Input     type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Password"
        handleClick={handleClick}></Input>
                <Input     type={visible ? "text" : "password"}
        icon={visible ? <MdVisibility /> : <MdVisibilityOff />}
        text="Confirm Password"
        handleClick={handleClick}></Input>

                <button className="login_btn">
                    <button>update</button>
                </button>
            </div>
        </form>
    </div>
  )
}

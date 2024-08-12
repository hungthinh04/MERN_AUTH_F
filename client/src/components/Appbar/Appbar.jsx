import Avatar from '../Avatar/Avatar'
import './Appbar.css'
import { BiMenuAltLeft } from "react-icons/bi";

import React from 'react'

export default function Appbar({handleSidebar}) {
  return (
    <div className="appbar">
        <div className="appbar_wrapper">
            {/* logo */}
            <div className="appbar_logo">
              <img src="./assets/img/spaceship.svg" alt="logo" />
              <p>MERN AUTH</p>
            </div>
            {/* avatar */}  
            <div className="appbar_avatar">
<Avatar/>
<BiMenuAltLeft onClick={handleSidebar}/>
            </div>
        </div>
    </div>
  ) 
}

import React from 'react'
import './resetLayout.css'
import Reset from '../Reset/Reset'

export default function ResetLayout({history}) {

    const handleClick=()=>{
        history.push("/")
    }

  return (
    <div className="authLayout">
        {/* logo */}
        <div className="authLayout_logo">
            <img src="../../assets/img/spaceship.svg" alt="logo" />
            {/* form */}
            <Reset/>
            {/* actions */}
            <p className="reset_p" onClick={handleClick}>Login ?</p>
        </div>
    </div>
  )
}

import React from 'react'
import './activateLayout.css'
import { useNavigate } from 'react-router-dom'


export default function ActivateLayout() {

    const navigate = useNavigate();

  return (
    <div className="activate">
        <p>ready to login ? <span onClick={()=>navigate('/')}>Here</span></p>
    </div>
  )
}

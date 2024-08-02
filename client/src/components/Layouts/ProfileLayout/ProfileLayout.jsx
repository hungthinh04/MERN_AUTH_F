import React from 'react'
import './profileLayout.css'
import Appbar from '../../Appbar/Appbar'
import Sidebar from './../../Sidebar/Sidebar';

export default function ProfileLayout() {
  return (
    <div className='profileLayout'>
      {/* appbar */}
      <Appbar/>
      {/* slidebar */}
      <Sidebar/>
      {/* content */}
      <div className="profileLayout_content">
        {/* feed */}
        {/* profile */}

      </div>
    </div>
  )
}


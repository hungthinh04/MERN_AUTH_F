import React, { useState } from 'react';
import './profileLayout.css';
import Appbar from '../../Appbar/Appbar';
import Sidebar from './../../Sidebar/Sidebar';
import Feed from '../../Feed/Feed';

export default function ProfileLayout() {
  const [sidebar, setSidebar] = useState(false);

  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <div className='profileLayout'>
      {/* appbar */}
      <Appbar handleSidebar={handleSidebar} />
      {/* sidebar */}
      <div className={sidebar ? 'profileLayout_sidebar open' : 'profileLayout_sidebar'}>
        <Sidebar />
      </div>
      {/* content */}
      <div className="profileLayout_content">
        {/* feed */}
        <div className="profileLayout_content_feed">
          <Feed/>
        </div>
        {/* profile */}
      </div>
    </div>
  );
}

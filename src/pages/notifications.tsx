import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import NotificationList from '../components/notifications'

const Notifications: React.FC<{toggleTheme: () => void}> = ({ toggleTheme })  => {
  const [isOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleTheme={toggleTheme}/>
      <div className='direct-page-container'>
        <Mobile_Navigation toggleTheme={toggleTheme}/>
        <div className="direct">
         <NotificationList />
        </div>
      </div>
    </div>
  )
}


export default Notifications
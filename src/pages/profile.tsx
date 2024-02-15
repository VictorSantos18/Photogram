import React from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import ProfileContent from '../components/profileContent'

const Profile: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-container'>
        <Mobile_Navigation />
        <div className="content">
          <ProfileContent />
        </div>
      </div>
    </div>
  )
}

export default Profile
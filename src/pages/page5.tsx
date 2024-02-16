import React from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import DirectList from '../components/direct/directList'
import DirectMessage from '../components/direct/DirectMessage'

const Direct: React.FC = () => {
  return (
    <div>
      <Sidebar />
      <div className='page-container'>
        <Mobile_Navigation />
        <div className="direct">
          <DirectList />
          <DirectMessage />
        </div>
      </div>
    </div>
  )
}

export default Direct
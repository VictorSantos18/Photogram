import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import DirectList from '../components/direct/directList'
import DirectMessage from '../components/direct/DirectMessage'

const Direct: React.FC<{toggleTheme: () => void}> = ({ toggleTheme })  => {
  const [isOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleTheme={toggleTheme}/>
      <div className='direct-page-container'>
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
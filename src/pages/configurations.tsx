import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import ConfigComponent from '../components/config'

const Configuration: React.FC<{toggleTheme: () => void}> = ({ toggleTheme })  => {
  const [isOpen] = useState(true);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggleTheme={toggleTheme}/>
      <div className='page-container'>
        <Mobile_Navigation toggleTheme={toggleTheme}/>
        <div className="content">
          <ConfigComponent />
        </div>
      </div>
    </div>
  )
}


export default Configuration
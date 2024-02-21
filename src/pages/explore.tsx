import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import ExploreContent from '../components/explore'

const Explore: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Sidebar isOpen={isOpen} />
      <div className='page-container'>
        <Mobile_Navigation />
        <div className="content">
          <ExploreContent />
        </div>
      </div>
    </div>
  )
}

export default Explore
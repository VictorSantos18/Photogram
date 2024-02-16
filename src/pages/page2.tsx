import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'

const Page2: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div>
      <Sidebar isOpen={isOpen}/>
      <div className='page-container'>
        <Mobile_Navigation />
        <div className="content">
          <h2>pagina 2</h2>
        </div>
      </div>
    </div>
  )
}

export default Page2
import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Posts from '../components/posts'
import ForYou from '../components/ForYou'
import Mobile_Navigation from '../components/navbar'

const Home: React.FC = () => {
  const [isOpen] = useState(true);

  return (
    <div>
      <Sidebar isOpen={isOpen}/>
      <div className='page-container'>
        <Mobile_Navigation />
        <div className="content">
          <Posts />
          <ForYou />
        </div>
      </div>  
    </div>
  )
}

export default Home
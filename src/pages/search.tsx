import React, { useState } from 'react'
import './style.css'
import Sidebar from '../components/sidebar'
import Mobile_Navigation from '../components/navbar'
import SearchUser from '../components/search'

const Search: React.FC = () => {
  const [isOpen] = useState(false);

  return (
    <div>
      <Sidebar isOpen={isOpen}/>
      <div className='direct-page-container'>
        <Mobile_Navigation />
        <div className="content">
          <SearchUser />
        </div>
      </div>
    </div>
  )
}

export default Search
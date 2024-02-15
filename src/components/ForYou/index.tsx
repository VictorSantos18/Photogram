import React from 'react'
import './style.css'

const ForYou:React.FC = () => {
  return (
    <div className='foryou-container'>
      <p>Sugestões para você</p>
      <div className="account">
        <div className='account-box'>
          <img src="https://i.pinimg.com/originals/c0/4b/01/c04b017b6b9d1c189e15e6559aeb3ca8.png" alt="" />
          <div className="account-info">
            <h2>Ankit_</h2>
            <p>Australia</p>
          </div>
        </div>
        <div>
          <p className='follow'>Seguir</p>
        </div>
      </div>

      <div className="account">
        <div className='account-box'>
          <img src="https://i.pinimg.com/564x/84/ed/52/84ed529add312d7b5f3fd281d21f8cfe.jpg" alt="" />
          <div className="account-info">
            <h2>Karan_sharma</h2>
            <p>Irlanda</p>
          </div>
        </div>
        <div>
          <p className='follow'>Seguir</p>
        </div>
      </div>

      <div className="account">
        <div className='account-box'>
          <img src="https://cdn-icons-png.flaticon.com/512/805/805370.png" alt="" />
          <div className="account-info">
            <h2>hardik-pandya</h2>
            <p>França</p>
          </div>
        </div>
        <div>
          <p className='follow'>Seguir</p>
        </div>
      </div>
    </div>
  )
}

export default ForYou
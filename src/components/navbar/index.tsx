import { MessageCircleMore, PlusSquare, Search } from 'lucide-react'
import './style.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Compass, Play } from 'lucide-react'
import ProfileImage from '../../assets/bighead.svg'

const Mobile_Navigation: React.FC = () => {
  return (
    <>
      <div className="navigation">
        <nav className='navbar'>
          <div className="logo">
            <h2>instagram</h2>
          </div>
          <div className="search">
            <Search className='icon' />
            <input type="Pesquisar" placeholder='Pesquisar'/>
          </div>
        </nav>

        <footer className='bottombar'>
          <div className="bottombar-links">
          <NavLink to="/page1">
            <div className="link home">
              <Home className='icon' />
              <span className='text-link'>Página inicial</span>
            </div>
          </NavLink>
          <NavLink to="/page2" >
            <div className="link compass">
              <Compass className='icon' />
              <span className='text-link'>Explorar</span>
            </div>
          </NavLink>
          <NavLink to="/page3" >
            <div className="link play">
              <Play className='icon' />
              <span className='text-link'>Reels</span>
            </div>
          </NavLink>
          <NavLink to="/page4" >
            <div className="link plus">
              <PlusSquare className='icon' />
              <span className='text-link'>Criar</span>
            </div>
          </NavLink>
          <NavLink to="/page5" >
            <div className="link message">
              <MessageCircleMore className='icon' />
              <span className='text-link'>Mensagens</span>
            </div>
          </NavLink>
          <NavLink to="/perfil/DrawWithMe" >
            <div className="link">
              <img src={ProfileImage} alt="imagem de perfil" className='profile-img' />
              <span className='text-link'>Perfil</span>
            </div>
          </NavLink>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Mobile_Navigation
import { MessageCircleMore, Search } from 'lucide-react'
import './style.css'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Compass, Heart } from 'lucide-react'
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
            <div>
              <Search className='search-icon' />
              <input type="Pesquisar" placeholder='Pesquisar' />
            </div>
            <div>
              <NavLink to="/notifications" >
                <div className="link heart">
                  <Heart className='icon' />
                </div>
              </NavLink>
            </div>
          </div>
        </nav>

        <footer className='bottombar'>
          <div className="bottombar-links">
            <NavLink to="/">
              <div className="link home">
                <Home className='icon' />
                <span className='text-link'>Página inicial</span>
              </div>
            </NavLink>
            <NavLink to="/explore" >
              <div className="link compass">
                <Compass className='icon' />
                <span className='text-link'>Explorar</span>
              </div>
            </NavLink>
            <NavLink to="/direct" >
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
import React from 'react'
import ProfileImage from '../../assets/bighead.svg'
import { NavLink, Outlet } from 'react-router-dom'
import { Home, Search, Compass, Play, MessageCircleMore, Heart, PlusSquare, Instagram } from 'lucide-react'
import './style.css'

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen })  => {
  return (
    <>
      <div className={`sidebar ${isOpen ? '' : 'closed-sidebar'}`}>
        <div className="sidebar-content">
          <div className="logo">
            <Instagram className='icon' />
            <h2>instagram</h2>
          </div>
          <NavLink to="/page1">
            <div className="link home">
              <Home className='icon' />
              <span className='text-link'>Página inicial</span>
            </div>
          </NavLink>
          <NavLink to="/page2" >
            <div className="link search">
              <Search className='icon ' />
              <span className='text-link'>Pesquisa</span>
            </div>
          </NavLink>
          <NavLink to="/page3" >
            <div className="link compass">
              <Compass className='icon' />
              <span className='text-link'>Explorar</span>
            </div>
          </NavLink>
          <NavLink to="/page4" >
            <div className="link play">
              <Play className='icon' />
              <span className='text-link'>Reels</span>
            </div>
          </NavLink>
          <NavLink to="/direct" >
            <div className="link message">
              <MessageCircleMore className='icon' />
              <span className='text-link'>Mensagens</span>
            </div>
          </NavLink>
          <NavLink to="/page6" >
            <div className="link heart">
              <Heart className='icon' />
              <span className='text-link'>Notificação</span>
            </div>
          </NavLink>
          <NavLink to="/page7" >
            <div className="link plus">
              <PlusSquare className='icon' />
              <span className='text-link'>Criar</span>
            </div>
          </NavLink>
          <NavLink to="/perfil/DrawWithMe" >
            <div className="link">
              <img src={ProfileImage} alt="imagem de perfil" className='profile-img' />
              <span className='text-link'>Perfil</span>
            </div>
          </NavLink>
          <div className="link-bottom">
          </div>
        </div>

      </div>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default Sidebar
import React, { useRef, useState } from 'react'
import ProfileImage from '../../assets/bighead.svg'
import { NavLink } from 'react-router-dom'
import { Home, Search, Compass, MessageCircleMore, Heart, Instagram, AlignJustify } from 'lucide-react'
import './style.css'
import Dropdown from './Dropdown'
import { useOutsideClick } from '../../hook'

interface SidebarProps {
  isOpen: boolean;
  toggleTheme: () => void;
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleTheme }) => {
  const [openDropdown, setOpenDropdown] = useState(false); 
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  useOutsideClick(dropdownRef, handleCloseDropdown);


  return (
    <>
      <div className={`sidebar ${isOpen ? '' : 'closed-sidebar'}`}>
        <div className="sidebar-content">
          <div className="logo">
            <Instagram className='icon' />
            <h2>Photogram</h2>
          </div>
          <NavLink to="/">
            <div className="link home">
              <Home className='icon' />
              <span className='text-link'>Página inicial</span>
            </div>
          </NavLink>
          <NavLink to="/search" >
            <div className="link search">
              <Search className='icon ' />
              <span className='text-link'>Pesquisa</span>
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
          <NavLink to="/notifications" >
            <div className="link heart">
              <Heart className='icon' />
              <span className='text-link'>Notificação</span>
            </div>
          </NavLink>
          <NavLink to="/perfil/DrawWithMe" >
            <div className="link">
              <img src={ProfileImage} alt="imagem de perfil" className='profile-img' />
              <span className='text-link'>Perfil</span>
            </div>
          </NavLink>
        </div>
        <div className="link" onClick={() => setOpenDropdown(prev => !prev)}>
          <AlignJustify />
          <span className='text-link'>Mais</span>
        </div>
        {openDropdown && <Dropdown toggleTheme={toggleTheme} currentTheme={''} onClose={handleCloseDropdown} />}
      </div>

    </>
  )
}

export default Sidebar
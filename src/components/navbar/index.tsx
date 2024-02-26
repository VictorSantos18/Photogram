import { AlignJustify, MessageCircleMore, Search } from 'lucide-react'
import './style.css'
import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Compass, Heart } from 'lucide-react'
import ProfileImage from '../../assets/bighead.svg'
import Dropdown from '../sidebar/Dropdown'
import { useOutsideClick } from '../../hook'

interface MobileNavigationProps {
  toggleTheme: () => void;
}

const Mobile_Navigation: React.FC<MobileNavigationProps> = ({ toggleTheme }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleCloseDropdown = () => {
    setOpenDropdown(false);
  };

  useOutsideClick(dropdownRef, handleCloseDropdown);


  return (
    <>
      <div className="navigation">
        <nav className='navbar'>
          <div className="logo">
            <h2>Photogram</h2>
          </div>
          <div className="search">
            <div className='search-content'>
              <Search className='search-icon' />
              <input type="Pesquisar" placeholder='Pesquisar' />
            </div>
            <div className='heart-link'>
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
            <div className="link" onClick={() => setOpenDropdown(prev => !prev)}>
              <AlignJustify />
              <span className='text-link'>Mais</span>
            </div>
            <NavLink to="/explore" >
              <div className="link compass">
                <Compass className='icon' />
                <span className='text-link'>Explorar</span>
              </div>
            </NavLink>
            <NavLink to="/">
              <div className="link home">
                <Home className='icon' />
                <span className='text-link'>Página inicial</span>
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
      {openDropdown && <Dropdown toggleTheme={toggleTheme} currentTheme={''} onClose={handleCloseDropdown} />}
    </>
  )
}

export default Mobile_Navigation
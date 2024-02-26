import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Bolt, Moon, Sun, Flag, MessageSquareWarning } from 'lucide-react';
import { useOutsideClick } from '../../hook/index'
import './style.css';
import WarningModal from '../WarningModal';

interface DropdownProps {
  toggleTheme: () => void;
  currentTheme: string;
  onClose: () => void; 
}

const Dropdown: React.FC<DropdownProps> = ({ toggleTheme, currentTheme, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(currentTheme === 'dark');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Utilize o hook useOutsideClick para detectar cliques fora do dropdown
  useOutsideClick(dropdownRef, () => {
    onClose(); // Chame a função onClose para fechar o dropdown
  });

  const handleLastNavLinkClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsChecked(!isChecked);
  };

  return (
    <div ref={dropdownRef} className='dropdown-links'>
      <NavLink to='/configurações/edit'>
        <div className='dropdown-link'>
          <Bolt className='icon' />
          <span className='text'>Configurações</span>
        </div>
      </NavLink>
      <NavLink to='/perfil/DrawWithMe'>
        <div className='dropdown-link'>
          <Flag className='icon' />
          <span className='text'>Preferidos</span>
        </div>
      </NavLink>
      <div className='dropdown-link' onClick={handleThemeToggle}>
        {isChecked ? (
          <Sun className='icon' />
        ) : (
          <Moon className='icon' />
        )}
        <span className='text'>Dark/Light Mode</span>
        <div className="checkbox">
          <input type="checkbox" checked={isChecked} readOnly />
          <label htmlFor="checkboxOneInput"></label>
        </div>
      </div>

      <NavLink onClick={handleLastNavLinkClick} to='#'>
        <div className='dropdown-link'>
          <MessageSquareWarning className='icon' />
          <span className='text'>Relatar um problema</span>
        </div>
      </NavLink>
      {isModalOpen && <WarningModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Dropdown;

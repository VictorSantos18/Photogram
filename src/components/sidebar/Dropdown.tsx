import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Bolt, Moon, Sun, Flag, MessageSquareWarning } from 'lucide-react';
import './style.css';
import WarningModal from '../WarningModal';

interface DropdownProps {
  toggleTheme: () => void;
  currentTheme: string;
}

const Dropdown: React.FC<DropdownProps> = ({ toggleTheme, currentTheme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(currentTheme === 'dark');

  useEffect(() => {
    setIsChecked(currentTheme === 'dark'); // Atualiza o estado do checkbox quando o tema muda
  }, [currentTheme]);

  const handleLastNavLinkClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme(); // Altera o tema quando o checkbox é clicado
    setIsChecked(!isChecked); // Atualiza o estado do checkbox
  };

  return (
    <div className='dropdown-links'>
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

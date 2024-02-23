import React from 'react';
import './style.css';
import DirectUsers from '../direct/directList/directUsers';
import { CarrousselInfo } from '../storys/Data';

const SearchUser: React.FC = () => {
  const usuariosGerais = CarrousselInfo.filter(user => user.category === "geral");

  return (
    <div className='search-container'>
      <div className="search-content">
        <div className="search-head">
          <h2>Pesquisa</h2>
          <input type="text" placeholder='Buscar' />
        </div>
        <div className="search-nav">
          <p className='text'>Recentes</p>
          <p className='text'>Limpar tudo</p>
        </div>
        <div className="search-history">
          {usuariosGerais.map((user, index) => (
            <DirectUsers key={index} image={user} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchUser;

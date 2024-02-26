import React, { useState } from 'react';
import './style.css';
import DirectUsers from '../direct/directList/directUsers';
import { CarrousselInfo } from '../storys/Data';

const SearchUser: React.FC = () => {
  // Estado para armazenar o valor atual do campo de busca
  const [searchTerm, setSearchTerm] = useState('');


  // Filtrar os usuários com base no termo de busca
  const usuariosGerais = CarrousselInfo.filter(user =>
    // Filtrar apenas os usuários da categoria "geral"
    user.category === "geral" &&
    // Verificar se o nome do usuário inclui o termo de busca (ignorando maiúsculas e minúsculas)
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  
  // Função para lidar com a mudança no campo de busca
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Atualizar o estado com o valor digitado no campo de busca
    setSearchTerm(event.target.value);
  };

  return (
    <div className='search-container'>
      <div className="search-content">
        <div className="search-head">
          <h2>Pesquisa</h2>
          <input type="text" placeholder='Buscar' value={searchTerm} onChange={handleSearchChange} />
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

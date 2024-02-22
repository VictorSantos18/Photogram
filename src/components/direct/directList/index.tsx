import React, { useState, useEffect } from 'react';
import { CarrousselInfo } from '../../storys/Data';
import './style.css';
import DirectUsers from './directUsers';
import { SquarePen } from 'lucide-react';

interface User {
  img: string;
  name: string;
  category: string; // Adicionando a propriedade category
  status: string;
}

const DirectList: React.FC = () => {
  const [toggle, setToggle] = useState(1);
  const [activeLink, setActiveLink] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [requestCount, setRequestCount] = useState<number>(0);

  // Contar o número de solicitações
  useEffect(() => {
    const filtered = CarrousselInfo.filter(user => user.category === 'solicitacoes');
    setRequestCount(filtered.length);
  }, []);

  useEffect(() => {
    // Filtrando usuários com base na categoria selecionada
    const filtered = CarrousselInfo.filter(user => {
      if (toggle === 1) return true; // Mostrar todos para a aba "Principal"
      if (toggle === 2) return user.category === 'geral'; // Filtrar para a aba "Geral"
      if (toggle === 3) return user.category === 'solicitacoes'; // Filtrar para a aba "Solicitações"
      return true;
    }).map(user => ({
      ...user,
      category: user.category || '', // Definindo uma categoria padrão para usuários sem categoria
    }));
    setFilteredUsers(filtered);
  }, [toggle]);

  function updateToggle(id: number) {
    setToggle(id);
    setActiveLink(id);
  }

  return (
    <div className="direct-list-container">
      <div className="direct-head">
        <div className='direct-name'>
          <h2>DrawWithMe</h2>
          <SquarePen className='icon' />
        </div>
        <div className="direct-nav">
          <span
            className={activeLink === 1 ? 'active text-direct' : 'text-direct'}
            onClick={() => updateToggle(1)}
          >
            Principal
          </span>
          <span
            className={activeLink === 2 ? 'active text-direct' : 'text-direct'}
            onClick={() => updateToggle(2)}
          >
            Geral
          </span>
          <span
            className={activeLink === 3 ? 'active text-direct' : 'text-direct'}
            onClick={() => updateToggle(3)}
          >
            Solicitações ({requestCount})
          </span>
        </div>
      </div>

      <div className={toggle === 1 ? 'show-direct-list' : 'direct-list'}>
        {filteredUsers.map((item, index) => (
          <DirectUsers
            key={index}
            image={item}
          />
        ))}
      </div>
      <div className={toggle === 2 ? 'show-direct-list' : 'direct-list'}>
        {toggle === 2 ? (
          filteredUsers.map((item, index) => (
            <DirectUsers
              key={index}
              image={item}
            />
          ))
        ) : (
          <span>Nenhum usuário no geral</span>
        )}
      </div>
      <div className={toggle === 3 ? 'show-direct-list' : 'direct-list'}>
        {toggle === 3 ? (
          filteredUsers.map((item, index) => (
            <DirectUsers
              key={index}
              image={item}
            />
          ))
        ) : (
          <span>Nenhuma Solicitação no momento</span>
        )}
      </div>
    </div>
  );
};

export default DirectList;

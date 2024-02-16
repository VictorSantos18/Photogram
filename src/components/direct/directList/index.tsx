import React, { useState } from 'react'
import { CarrousselInfo } from '../../storys/Data'
import './style.css'
import DirectUsers from './directUsers'
import { SquarePen } from 'lucide-react'

const DirectList: React.FC = () => {

  const [toggle, setToggle] = useState(1);
  const [activeLink, setActiveLink] = useState(1);

  function updateToggle(id: number) {
    setToggle(id);
    setActiveLink(id);
  }

  return (
    <>
      <div className="direct-list-container">
        <div className="direct-head">
          <div className='direct-name'>
            <h2>DrawWithMe</h2>
            <SquarePen className='icon' />
          </div>
          <div className="direct-nav">
            <span
              className={activeLink === 1 ? 'active text-profile' : 'text-profile'}
              onClick={() => updateToggle(1)}
            >
              Principal
            </span>
            <span
              className={activeLink === 2 ? 'active text-profile' : 'text-profile'}
              onClick={() => updateToggle(2)}
            >
              Geral
            </span>
            <span
              className={activeLink === 3 ? 'active text-profile' : 'text-profile'}
              onClick={() => updateToggle(3)}
            >
              Solicitações
            </span>
          </div>
        </div>

        <div className={toggle === 1 ? 'show-direct-list' : 'direct-list'}>
          {CarrousselInfo.map((item, index) => (
            <DirectUsers key={index} image={item} />
          ))}
        </div>
        <div className={toggle === 2 ? 'show-direct-list' : 'direct-list'}>
          <span>Nenhum usuário no geral</span>
        </div>
        <div className={toggle === 3 ? 'show-direct-list' : 'direct-list'}>
          <span>Nenhuma Solicitação no momento</span>
        </div>

      </div>
    </>
  )
}

export default DirectList
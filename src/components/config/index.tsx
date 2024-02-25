import React from 'react'
import ConfigUserImage from '../../assets/bighead.svg';
import './style.css'

const ConfigComponent: React.FC = () => {

  return (
    <div className='config-container'>

      <div className='item'>
        <div className="title">
          <h2>Editar perfil</h2>
        </div>
        <div className="config-user-info">
          <div className='right'>
            <img src={ConfigUserImage} alt="imagem" />
            <div>
              <h2>DrawWithMe</h2>
              <p className='text'>Leonardo</p>
            </div>
          </div>
          <div className='left'>
            <button className='blu'>Alterar foto</button>
          </div>

        </div>
      </div>

      <div className='item'>
        <div className="title">
          <h2>Site</h2>
        </div>
        <div className="config-website-link">
          <input type="text" placeholder='Site' />
          <p className="text">
            Somente é possível editar os links no celular. Acesse o app do Instagram e edite seu perfil para alterar os sites na sua bio.
          </p>
        </div>
      </div>

      <div className='item'>
        <div className="title">
          <h2>Bio</h2>
        </div>
        <div className="config-user-bio">
          <label htmlFor="">
            <textarea name="" id="" value="Come and draw with me.🎨
here you can find some pictures that i drew.🖌️" />
          </label>
        </div>
      </div>


      <div className="title">
        <h2>Mostrar sugestões de contas em perfis</h2>
      </div>
      <div className='last-item'>
        <div>
          <div className="title">
            <h2>Mostrar sugestões de contas em perfis</h2>
          </div>
          <div className="config-account-info">
            <p className="text">
              Mostrar sugestões de contas em perfis. Escolha se as pessoas podem ver sugestões
              de contas semelhantes no seu perfil e se sua conta pode ser sugerida em outros perfis.
            </p>
          </div>
        </div>

        <div className="checkbox">
          <input type="checkbox" readOnly />
          <label htmlFor="checkboxOneInput"></label>
        </div>
      </div>

      <div className="btn-item">
        <div>
        </div>
        <div>
          <button className='blu'>Atualizar</button>
        </div>
      </div>
    </div>
  )
}


export default ConfigComponent
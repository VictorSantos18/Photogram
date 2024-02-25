import React from 'react';
import './style.css';

interface WarningModalProps {
  onClose: () => void; // Função para fechar o modal
}

const WarningModal: React.FC<WarningModalProps> = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="warning-modal">
        <div className="warning-modal-content">
          <div className="warning-modal-content-head">
            <span></span>
            <span>Relatar um problema</span>
            <div className="close">
              <span onClick={onClose}>&times;</span>
            </div>
          </div>
          <div className="warning-modal-content-info">
            <textarea
              name="warningModal"
              placeholder='Digite o maximo de informações possíveis'
            />
          </div>
          <div className="warning-modal-content-footer">
            <div className="btn-section">
              <button className='blu'>Enviar relato</button>
              <button>Adicionar arquivo</button>
            </div>
            <div className="text-section">
              <p className='text'>Seu nome de usuário do Instagram e as informações do navegador serão incluídos automaticamente no relatório.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;

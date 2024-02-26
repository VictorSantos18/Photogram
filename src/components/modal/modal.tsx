import React from 'react';
import './style.css'

interface ModalProps {
  onClose: () => void;
  imageComponent: React.ReactNode;
  commentsComponent: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, imageComponent, commentsComponent }) => {
  return (
    <div className="modal">z
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div className="modal-image">{imageComponent}</div>
        <div className="modal-comments">{commentsComponent}</div>
      </div>
    </div>
  );
};

export default Modal;

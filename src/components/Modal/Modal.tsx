import React from 'react';
import './Modal.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
};

export const Modal: React.FC<Props> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={onClose}></div>

      <div className="modal-content">
        <div className="box">{children}</div>
      </div>

      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={onClose}
      ></button>
    </div>
  );
};

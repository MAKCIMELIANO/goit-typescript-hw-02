import React from 'react';
import Modal from 'react-modal';
import css from './ImageModal.module.css';
import { ImageModalProps } from './ImageModal.types';

Modal.setAppElement('#root');

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
  alt,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className={css.modal}
      overlayClassName={css.overlay}
    >
      <div className={css.modalContent}>
        <img src={imageUrl} alt={alt} />
      </div>
    </Modal>
  );
};

export default ImageModal;

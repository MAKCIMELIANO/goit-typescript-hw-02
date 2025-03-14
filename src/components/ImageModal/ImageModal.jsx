import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onRequestClose, imageUrl, alt }) => {
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

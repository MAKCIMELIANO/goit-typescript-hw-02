export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
  alt: string;
}

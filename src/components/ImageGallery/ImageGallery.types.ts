import { Image } from '../App/App.types';

export interface ImageGalleryProps {
  articles: Image[];
  onImageClick: (imageUrl: string, description: string) => void;
}

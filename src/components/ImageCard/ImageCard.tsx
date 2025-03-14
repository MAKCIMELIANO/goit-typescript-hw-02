import React from 'react';
import css from './ImageCard.module.css';
import { ImageCardProps } from './ImageCard.types';

const ImageCard: React.FC<ImageCardProps> = ({ src, alt }) => {
  return (
    <div className={css.card}>
      <img src={src} alt={alt} className={css.image} />
    </div>
  );
};

export default ImageCard;

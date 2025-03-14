import React from 'react';
import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import { ImageGalleryProps } from './ImageGallery.types';

const ImageGallery: React.FC<ImageGalleryProps> = ({
  articles,
  onImageClick,
}) => {
  return (
    <ul className={css.gallery}>
      {articles.map(({ id, urls, description }) => (
        <li
          key={id}
          className={css.item}
          onClick={() => onImageClick(urls.regular || urls.full, description)}
        >
          <ImageCard src={urls.small} alt={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

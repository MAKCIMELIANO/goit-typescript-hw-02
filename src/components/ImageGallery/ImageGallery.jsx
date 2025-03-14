import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = ({ articles, onImageClick }) => {
  return (
    <ul className={css.gallery}>
      {articles.map(({ id, urls, description }) => (
        <li
          key={id}
          className={css.item}
          onClick={() => onImageClick(urls.regular, description)}
        >
          <ImageCard src={urls.small} alt={description} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;

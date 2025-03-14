import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import FetchPhotos from '../FetchPhotos/FetchPhotos';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState('');
  const [totalImages, setTotalImages] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async newTopic => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      setTopic(newTopic);
      setPage(1);
      const { results, total } = await FetchPhotos(newTopic, 1);
      setArticles(results);
      setTotalImages(total);
      setHasMore(results.length < total);
      return { results, total };
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const { results } = await FetchPhotos(topic, nextPage);
      setArticles(prevArticles => [...prevArticles, ...results]);
      setPage(nextPage);
      setHasMore(articles.length + results.length < totalImages);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (imageUrl, alt) => {
    setSelectedImage({ imageUrl, alt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className={css.container}>
      <Toaster position="top-left" reverseOrder={false} />
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage />}
      {articles.length > 0 && (
        <ImageGallery articles={articles} onImageClick={openModal} />
      )}
      {loading && <Loader />}
      {articles.length > 0 && !loading && hasMore && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
      {articles.length > 0 && !loading && !hasMore && (
        <p>There are no more pictures</p>
      )}
      {selectedImage && (
        <ImageModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          imageUrl={selectedImage.imageUrl}
          alt={selectedImage.alt}
        />
      )}
    </div>
  );
};

export default App;

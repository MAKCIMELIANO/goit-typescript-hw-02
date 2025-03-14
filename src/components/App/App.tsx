import React, { useState, useEffect } from 'react';
import css from './App.module.css';
import { Toaster } from 'react-hot-toast';
import ImageGallery from '../ImageGallery/ImageGallery';
import FetchPhotos from '../FetchPhotos/FetchPhotos';
import Loader from '../Loader/Loader';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SearchBar from '../SearchBar/SearchBar';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import ImageModal from '../ImageModal/ImageModal';
import { Image, FetchPhotosResult } from './App.types';

const App: React.FC = () => {
  const [articles, setArticles] = useState<Image[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [topic, setTopic] = useState<string>('');
  const [totalImages, setTotalImages] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  useEffect(() => {
    if (!modalIsOpen) {
      setSelectedImage(null);
    }
  }, [modalIsOpen]);

  const handleSearch = async (
    newTopic: string,
  ): Promise<{ results: Image[] }> => {
    try {
      setArticles([]);
      setError(false);
      setLoading(true);
      setTopic(newTopic);
      setPage(1);
      const { results, total }: FetchPhotosResult = await FetchPhotos(
        newTopic,
        1,
      );
      setArticles(results);
      setTotalImages(total);
      setHasMore(results.length < total);
      return { results };
    } catch (error) {
      console.log(error);
      setError(true);
      return { results: [] };
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async (): Promise<void> => {
    try {
      setLoading(true);
      const nextPage = page + 1;
      const { results }: FetchPhotosResult = await FetchPhotos(topic, nextPage);
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

  const openModal = (imageUrl: string, description: string): void => {
    setSelectedImage({
      id: '',
      alt_description: description,
      urls: { small: '', full: imageUrl },
      description,
    });
    setModalIsOpen(true);
  };

  const closeModal = (): void => {
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
          imageUrl={selectedImage.urls.full}
          alt={selectedImage.alt_description}
        />
      )}
    </div>
  );
};

export default App;

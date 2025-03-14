import React from 'react';
import css from './LoadMoreBtn.module.css';
import { LoadMoreBtnProps } from './LoadMoreBtn.types';

const LoadMoreBtn: React.FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.button}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;

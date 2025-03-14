import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import css from './Loader.module.css';
import { LoaderProps } from './Loader.types';

const Loader: React.FC<LoaderProps> = () => {
  return (
    <div className={css.loaderWrapper}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#007bff"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;

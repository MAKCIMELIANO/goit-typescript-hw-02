import React from 'react';
import { ErrorMessageProps } from './ErrorMessage.types';

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return <p>Whoops, something went wrong! Please try reloading this page!</p>;
};

export default ErrorMessage;

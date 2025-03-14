import React from 'react';
import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css';
import { SearchBarProps } from './SearchBar.types';

const SearchBar: React.FC<SearchBarProps> = ({ onSubmit }) => {
  const handleSubmit = async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const form = evt.target as HTMLFormElement;
    const topic = (form.elements.namedItem('topic') as HTMLInputElement).value;

    if (topic.trim() === '') {
      toast.error('Please enter search term!');
      return;
    }

    const { results } = await onSubmit(topic);

    if (results.length === 0) {
      toast.error('No results found!');
    }

    form.reset();
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;

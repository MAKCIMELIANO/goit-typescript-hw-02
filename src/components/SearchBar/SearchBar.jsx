import { toast } from 'react-hot-toast';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = async evt => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value;

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

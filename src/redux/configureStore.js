import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoriesReducer from './categories/categories';

const booksStore = configureStore(
  {
    reducer: {
      books: booksReducer,
      categories: categoriesReducer,
    },
  },
);

export default booksStore;

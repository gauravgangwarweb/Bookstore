import { createAsyncThunk } from '@reduxjs/toolkit';

const ADD_BOOK = 'booksStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CZDXQb2zMgHNbimDk0mO/books/';

const initialState = [];

export const getAllBooks = createAsyncThunk(
  FETCH_BOOKS,
  async (post, { dispatch }) => {
    const resp = await fetch(URL);
    const data = await resp.json();
    const books = Object.keys(data).map((id) => ({
      ...data[id][0],
      item_id: id,
    }));
    dispatch({
      type: FETCH_BOOKS,
      payload: books,
    });
  },
);

export const addBook = createAsyncThunk(
  ADD_BOOK,
  async (book, { dispatch }) => {
    await fetch(URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });
    dispatch({
      type: ADD_BOOK,
      payload: book,
    });
  },
);

export const removeBook = createAsyncThunk(
  REMOVE_BOOK,
  async (id, { dispatch }) => {
    await fetch(`${URL}${id}`, {
      method: 'DELETE',
    });
    dispatch({
      type: REMOVE_BOOK,
      payload: id,
    });
  },
);

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload)];
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;

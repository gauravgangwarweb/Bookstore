import { deleteData, getData, sendData } from './fetchBooks';

const ADD_BOOK = 'booksStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const FETCH_BOOKS = 'bookstore/books/FETCH_BOOKS';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/CZDXQb2zMgHNbimDk0mO/books';

const initialState = [];

export const fetchBooks = (payload) => ({
  type: FETCH_BOOKS,
  payload,
});

export const addBook = (payload) => async (dispatch) => {
  await sendData(URL, payload);
  return dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (id) => async (dispatch) => {
  await deleteData(URL, id);
  return dispatch({ type: REMOVE_BOOK, payload: id });
};

export const displayBooks = () => async (dispatch) => {
  const books = getData(URL);
  const booksArr = [];
  Object.keys(books).forEach((id) => {
    booksArr.push({
      item_id: id,
      title: books[id][0].title,
      author: books[id][0].author,
    });
  });
  dispatch(fetchBooks(booksArr));
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    case FETCH_BOOKS:
      return action.payload;
    default:
      return state;
  }
};

export default booksReducer;

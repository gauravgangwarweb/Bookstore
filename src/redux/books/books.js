const ADD_BOOK = 'booksStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const initialState = [
  {
    title: 'Book 1',
    author: 'Author 1',
    id: 1,
  },
  {
    title: 'Book 2',
    author: 'Author 2',
    id: 2,
  },
  {
    title: 'Book 3',
    author: 'Author 3',
    id: 3,
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({ type: REMOVE_BOOK, id: payload });

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default booksReducer;

import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './Pages/BooksPage';
import CategoriesPage from './Pages/CategoriesPage';
import Navbar from './components/Navbar';
import booksStore from './redux/configureStore';

const App = () => (
  <Provider store={booksStore}>
    <BrowserRouter>
      <div className="main">
        <Navbar />
        <Routes>
          <Route path="/" element={<BooksPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;

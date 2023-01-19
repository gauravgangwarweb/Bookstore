import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BooksPage from './Pages/BooksPage';
import CategoriesPage from './Pages/CategoriesPage';
import Navbar from './components/Navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<BooksPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
    </Routes>
  </BrowserRouter>
);

export default App;

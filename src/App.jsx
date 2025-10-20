import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home.jsx';
import AddBook from './pages/AddBook.jsx';
import EditBook from './pages/EditBook.jsx';
import BookList from './pages/BookList.jsx';
import { getAllBooksAPI } from './service/bookAPI.js';

export default function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const data = await getAllBooksAPI();
      if (data) setBooks(data);
    };
    loadBooks();
  }, []);

  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">Library Manager</Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><Link className="nav-link" to="/" style={{ color: "black" }}>Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/books" style={{ color: "black" }}>Book List</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/add" style={{ color: "black" }}>Add Book</Link></li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<BookList books={books} setBooks={setBooks} />} />
          <Route path="/add" element={<AddBook setBooks={setBooks} />} />
          <Route path="/edit/:id" element={<EditBook setBooks={setBooks} />} />
        </Routes>
      </div>
    </Router>
  );
}



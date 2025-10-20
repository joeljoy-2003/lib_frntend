import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBooksAPI, deleteBookAPI } from '../service/bookAPI.js';

export default function BookList({ books, setBooks }) {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const fetchBooks = async () => {
      const data = await getAllBooksAPI();
      if (data) setBooks(data);
    };
    fetchBooks();
  }, [setBooks]);

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      await deleteBookAPI(id);
      const updated = await getAllBooksAPI();
      if (updated) setBooks(updated);
    }
  };

  const filteredBooks = books
    .filter(b => b.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortOrder === 'asc'
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    );

  return (
    <div className="container py-4">
      <img
        src='https://images.unsplash.com/photo-1642160428828-334bf07023ec?q=80&w=1170&auto=format&fit=crop'
        alt="Library Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', zIndex: '-1' }}
      />

      <div className="text-center mb-4">
        <h2 className="fw-bold display-5" style={{ color: "white" }}>Library Book List</h2>
        <p className="lead" style={{ color: "white" }}>Manage, search, sort, and keep track of all your books easily!</p>
      </div>

      <div className="d-flex flex-column flex-md-row justify-content-center mb-4 gap-2">
        <input
          type="text"
          className="form-control form-control-lg shadow"
          placeholder="🔍 Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: '400px', borderRadius: '30px' }}
        />
        <select
          className="form-select form-select-lg shadow"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          style={{ maxWidth: '200px', borderRadius: '30px' }}
        >
          <option value="asc">Sort A–Z</option>
          <option value="desc">Sort Z–A</option>
        </select>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="text-center bg-light text-dark p-4 rounded shadow">
          <p className="mb-0 fs-5">No Books Found...</p>
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-hover align-middle shadow rounded overflow-hidden">
            <thead
              style={{
                background: 'linear-gradient(90deg, #f42f08ff, #dd2476)',
                color: 'white',
              }}
            >
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Year</th>
                <th style={{ width: '180px' }}>Actions</th>
              </tr>
            </thead>
            <tbody className="bg-light text-dark">
              {filteredBooks.map((book) => (
                <tr key={book.id}>
                  <td className="fw-semibold">{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.year}</td>
                  <td>
                    <Link to={`/edit/${book.id}`} className="btn btn-warning btn-sm me-2 shadow-sm">✏️ Edit</Link>
                    <button onClick={() => handleDelete(book.id)} className="btn btn-danger btn-sm shadow-sm">🗑 Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}



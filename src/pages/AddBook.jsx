import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookForm from '../components/BookForm.jsx';
import { addBookAPI, getAllBooksAPI } from '../service/bookAPI.js';

export default function AddBook({ setBooks }) {
  const [formData, setFormData] = useState({ title: '', author: '', year: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addBookAPI(formData);
    const updated = await getAllBooksAPI();
    if (updated) setBooks(updated);
    navigate('/books');
  };

  return (
    <div className="container py-5">
      <img
        src='https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=1173&auto=format&fit=crop'
        alt="Library Background"
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ objectFit: 'cover', zIndex: '-1' }}
      />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white text-center">
              <h3 className="mb-0">Add New Book</h3>
            </div>
            <div className="card-body">
              <BookForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

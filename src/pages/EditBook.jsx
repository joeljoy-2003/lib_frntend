import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookForm from '../components/BookForm.jsx';
import { getBookAPI, updateBookAPI, getAllBooksAPI } from '../service/bookAPI.js';

export default function EditBook({ setBooks }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ title: '', author: '', year: '' });

  useEffect(() => {
    const fetchBook = async () => {
      const book = await getBookAPI(id);
      if (book) setFormData(book);
      else navigate('/books');
    };
    fetchBook();
  }, [id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBookAPI(id, formData);
    const updated = await getAllBooksAPI();
    if (updated) setBooks(updated);
    navigate('/books');
  };

  return (
    <div className="container py-4">
      <h2 className="mb-3 text-center">✏ Edit Book</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <BookForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

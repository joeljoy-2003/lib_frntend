import React from 'react';

export default function BookForm({ formData, setFormData, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit} className="card p-4 shadow">
      <div className="mb-3">
        <label className="form-label">Title</label>
        <input
          type="text"
          className="form-control"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Author</label>
        <input
          type="text"
          className="form-control"
          value={formData.author}
          onChange={(e) => setFormData({ ...formData, author: e.target.value })}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Year</label>
        <input
          type="number"
          className="form-control"
          value={formData.year}
          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
          required
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">Save</button>
    </form>
  );
}


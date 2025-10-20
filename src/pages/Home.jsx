import React from 'react';

export default function Home() {
  return (
    <>
      <div className="container py-4">
        <img
          src='https://images.unsplash.com/photo-1666361711257-6fe8b5105fae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0'
          alt="Library Background"
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ objectFit: 'cover', zIndex: '-1' }}
        />
        <div className="d-flex flex-column justify-content-center align-items-center text-center h-100 text-white">
          <h1 className="fw-bold display-3" style={{ color: "white" }}>Library Manager</h1>
          <p className="lead fs-4">A library is a gateway to endless worlds and infinite knowledge...</p>
        </div>
      </div>
    </>
  );
}


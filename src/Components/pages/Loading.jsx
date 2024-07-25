import React from 'react';
import './Loading.css'; // Ensure you have this CSS file

function Loading() {
  return (
    <div className="loading-container">
      <div className="loading-animation">
        <div className="loader"></div>
        <p className="loading-text">Loading...</p>
      </div>
    </div>
  );
}

export default Loading;

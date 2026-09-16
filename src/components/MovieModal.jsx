import React from 'react';
import { createPortal } from 'react-dom';

export default function MovieModal({ movie, onClose }) {
  const fallbackImage = "https://placeholder.com";

    return createPortal(
    <div 
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50 backdrop-blur-sm"
      onClick={onClose} 
    >
    <div 
      className="bg-gray-800 rounded-lg max-w-2xl w-full overflow-y-auto shadow-2xl relative max-h-[90vh]"
      onClick={(e) => e.stopPropagation()} 
    >
        {/* Close Button at Top Right */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 bg-black bg-opacity-50 text-white hover:text-red-500 rounded-full w-8 h-8 flex items-center justify-center font-bold transition z-10"
        >
          ✕
        </button>

        {/* Banner/Poster */}
        <div className="h-64 bg-gray-700 relative">
          <img 
            src={movie.image ? movie.image.original : fallbackImage} 
            alt={movie.name} 
            className="w-full h-full object-cover opacity-80"
          />
        </div>

        {/* Modal Content */}
        <div className="p-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{movie.name}</h2>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
            <span>⭐ Rating: {movie.rating?.average || 'N/A'}</span>
            <span>📅 Release: {movie.premiered || 'N/A'}</span>
            <span>🏷️ Genres: {movie.genres?.join(', ') || 'N/A'}</span>
          </div>

          <h3 className="font-semibold text-lg mb-1 text-red-500">Overview:</h3>
          
          <div 
            className="text-gray-300 text-sm leading-relaxed mb-6 max-h-40 overflow-y-auto"
            dangerouslySetInnerHTML={{ __html: movie.summary || 'No description available.' }}
          />

          <div className="flex justify-end">
            <button 
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 px-5 py-2 rounded font-medium transition"
            >
              ❌ Close
            </button>
          </div>
        </div>
            </div>
    </div>,
    document.body
  );
}
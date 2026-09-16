import React from 'react';

export default function MovieCard({ movie, onDetailsClick }) {
  const fallbackImage = "https://placeholder.com";

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col justify-between">
      <img 
        src={movie.image ? movie.image.medium : fallbackImage} 
        alt={movie.name} 
        className="w-full h-72 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-bold text-lg mb-2 line-clamp-1">{movie.name}</h3>
          <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
            <span>⭐ {movie.rating?.average || 'N/A'}</span>
            <span>📅 {movie.premiered ? movie.premiered.split('-')[0] : 'N/A'}</span>
          </div>
        </div>
        <button 
          onClick={onDetailsClick}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded font-medium transition"
        >
          See Details
        </button>
      </div>
    </div>
  );
}

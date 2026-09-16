import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          to="/"
          className="text-2xl font-bold text-red-500 cursor-pointer flex items-center gap-2"
        >
          🎬 MovieExplorer
        </Link>
        <Link 
          to="/movies"
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-medium transition"
        >
          Movies
        </Link>
      </div>
    </nav>
  );
}
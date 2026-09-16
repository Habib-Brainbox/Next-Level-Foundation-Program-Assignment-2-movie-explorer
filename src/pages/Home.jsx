import React from 'react';

import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div 
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center"
     style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://unsplash.com')` }}
    >
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide">
          DISCOVER MOVIES
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-xl mx-auto mb-8">
          Explore and discover your favorite movies and TV shows from around the world.
        </p>
                <Link 
          to="/movies"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform hover:scale-105 transition inline-block"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}

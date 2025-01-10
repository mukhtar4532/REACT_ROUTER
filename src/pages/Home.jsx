import React from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url("https://www.canva.com/templates/EAFL4rfdjoc-minimal-action-the-rundown-movie-poster")`,
        }}></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <span className="text-blue-500">MoviesPicker</span>
        </h1>
        <p className="text-lg mb-6 max-w-2xl">
          Discover the latest blockbusters, timeless classics, and exciting
          independent films. Book your tickets now and experience the magic of
          cinema like never before.
        </p>

        {/* Explore Movies Button */}
        <button
          onClick={() => navigate("/movie")}
          className="px-6 py-3 bg-red-600 text-lg font-medium rounded-lg hover:bg-blue-600 transition-colors">
          Explore Movies
        </button>
      </div>
    </div>
  );
};

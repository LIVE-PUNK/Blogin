import React from 'react';
import { useNavigate } from 'react-router-dom';
import nopageGif from '../images/404.png';

const NoPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${nopageGif})` }}
    >
      {/* Centered Button, shifted lower */}
      <div className="absolute left-1/2 top-[70%] transform -translate-x-1/2 -translate-y-1/2">
        <button
          className="px-6 py-3 font-bold text-lg bg-gray-500 bg-opacity-100 text-white rounded hover:bg-opacity-95 transition"
          onClick={() => navigate('/')}
        >
          TAKE ME BACK
        </button>
      </div>
    </div>
  );
};

export default NoPage;

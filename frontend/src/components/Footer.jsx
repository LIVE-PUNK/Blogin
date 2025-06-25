import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#0c0c0c' }} className="text-white py-6 text-center">
      <div className="flex justify-center gap-6 mb-2">
        <a href="https://www.linkedin.com/in/snehit-raj/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">LinkedIn</a>
        <a href="https://github.com/LIVE-PUNK" target="_blank" rel="noopener noreferrer"className="hover:text-gray-400 transition-colors">GitHub</a>
        <a href="https://www.instagram.com/snehit_raj_/" target="_blank" rel="noopener noreferrer"className="hover:text-pink-500 transition-colors">Instagram</a>
      </div>
      <p className="text-sm text-gray-500">&copy; 2025 Snehit Raj</p>
    </footer>
  );
};

export default Footer;

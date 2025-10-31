
import React from 'react';
import { Logo } from './Logo';

interface HeaderProps {
    onSignUpClick: () => void;
    onAboutClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onSignUpClick, onAboutClick }) => {
  return (
    <header className="bg-gray-800/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Logo className="h-12 w-12 text-yellow-400" />
            <span className="text-2xl font-bold tracking-wider text-white">
              <span className="text-yellow-400">ፀሐይ</span> Connect
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-lg">
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">Find Service</a>
            <button onClick={onAboutClick} className="text-gray-300 hover:text-yellow-400 transition duration-300">About Us</button>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">Login</a>
            <a href="#" className="text-gray-300 hover:text-yellow-400 transition duration-300">Language</a>
            <button
                onClick={onSignUpClick}
                className="bg-yellow-400 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-yellow-300 transition duration-300 shadow-md">
              Sign Up
            </button>
          </nav>
          <div className="md:hidden">
            {/* Mobile menu button could go here */}
            <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

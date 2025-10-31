
import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 border-t border-gray-700 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
             <div className="flex items-center space-x-3 mb-4">
                <Logo className="h-12 w-12 text-yellow-400" />
                <span className="text-2xl font-bold tracking-wider text-white">
                  <span className="text-yellow-400">ፀሐይ</span> Connect
                </span>
              </div>
              <p className="text-gray-400 text-center md:text-left">Connecting home makers with clients. Quality, trust, and professionalism guaranteed.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Find Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Sign Up</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-yellow-400 mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
                <li>Email: contact@tsehay.com</li>
                <li>Phone: +251 912 345 678</li>
                <li>Addis Ababa, Ethiopia</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} ፀሐይ Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

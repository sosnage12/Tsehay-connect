
import React from 'react';

export const Logo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#clip0_logo)">
      {/* House structure */}
      <path d="M15 40 L50 15 L85 40 L85 85 L15 85 Z" fill="#facc15" />
      {/* Roof */}
      <path d="M10 42 L50 10 L90 42 Z" fill="#facc15" stroke="#facc15" strokeWidth="4" />
      {/* Window */}
      <rect x="42" y="45" width="16" height="16" fill="#1a202c" />
      <rect x="44" y="47" width="5" height="5" fill="#facc15"/>
      <rect x="51" y="47" width="5" height="5" fill="#facc15"/>
      <rect x="44" y="54" width="5" height="5" fill="#facc15"/>
      <rect x="51" y="54" width="5" height="5" fill="#facc15"/>
      
      {/* Circuit lines */}
      <line x1="35" y1="40" x2="35" y2="50" stroke="#facc15" strokeWidth="2"/>
      <circle cx="35" cy="52" r="2" fill="#facc15" />
      <line x1="28" y1="40" x2="28" y2="45" stroke="#facc15" strokeWidth="2"/>
      <circle cx="28" cy="47" r="2" fill="#facc15" />
      <line x1="65" y1="40" x2="65" y2="50" stroke="#facc15" strokeWidth="2"/>
      <circle cx="65" cy="52" r="2" fill="#facc15" />
      <line x1="72" y1="40" x2="72" y2="45" stroke="#facc15" strokeWidth="2"/>
      <circle cx="72" cy="47" r="2" fill="#facc15" />
      
      {/* Wifi signals */}
      <path d="M20 85 A 30 30 0 0 1 50 55" stroke="#3b82f6" strokeWidth="8" />
      <path d="M28 85 A 22 22 0 0 1 50 63" stroke="#3b82f6" strokeWidth="8" />
      <path d="M36 85 A 14 14 0 0 1 50 71" stroke="#3b82f6" strokeWidth="8" />
      <path d="M80 85 A 30 30 0 0 0 50 55" stroke="#3b82f6" strokeWidth="8" />
      <path d="M72 85 A 22 22 0 0 0 50 63" stroke="#3b82f6" strokeWidth="8" />
      <path d="M64 85 A 14 14 0 0 0 50 71" stroke="#3b82f6" strokeWidth="8" />
    </g>
    <defs>
      <clipPath id="clip0_logo">
        <rect width="100" height="100" rx="8" fill="white"/>
      </clipPath>
    </defs>
  </svg>
);

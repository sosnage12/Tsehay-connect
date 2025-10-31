
import React from 'react';
import { Modal } from './Modal';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input {...props} className={`w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${props.className}`} />
);

export const SignUpModal: React.FC<SignUpModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Create an Account">
      <form className="space-y-4">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Full Name</label>
          <InputField type="text" placeholder="e.g. Abebe Kebede" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Email Address</label>
          <InputField type="email" placeholder="you@example.com" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Phone Number</label>
          <InputField type="tel" placeholder="0912345678" required />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-400">Kebele ID</label>
          <InputField type="text" placeholder="Your Kebele ID Number" required />
        </div>
        <button type="submit" className="w-full mt-6 bg-yellow-400 text-gray-900 font-bold py-3 rounded-lg hover:bg-yellow-300 transition-colors duration-300">
          Register
        </button>
      </form>
    </Modal>
  );
};

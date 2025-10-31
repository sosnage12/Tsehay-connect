
import React from 'react';
import { Modal } from './Modal';

interface AboutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AboutModal: React.FC<AboutModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="About ፀሐይ Connect">
      <div className="space-y-4 text-gray-300">
        <p>
            <strong>ፀሐይ Connect</strong> is a bridge between dedicated, professional home workers and clients who need trusted help. Our mission is to empower individuals by providing them with certified training and connecting them with meaningful employment opportunities.
        </p>
        <p>
            We believe in professionalism and safety. Every home maker on our platform undergoes a rigorous 1-month training program covering their chosen field, whether it's cooking, cleaning, or nanny services.
        </p>
        <p>
            Furthermore, we ensure that every worker has a certified medical paper, giving our clients peace of mind. Our platform is designed to make finding the right help simple, secure, and efficient.
        </p>
        <p className="font-semibold text-yellow-400">Join us in creating a community built on trust and excellence.</p>
      </div>
    </Modal>
  );
};

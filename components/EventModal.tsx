
import React from 'react';
import { Modal } from './Modal';
import { SERVICE_TYPES } from '../constants';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InputField: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input {...props} className={`w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${props.className}`} />
);

const SelectField: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select {...props} className={`w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${props.className}`}>
        {props.children}
    </select>
);

export const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Book for an Event">
        <p className="text-gray-400 mb-6">Need a professional for a single day? Perfect for weddings, graduations, or just a day off. Fill out the details below to find help.</p>
        <form className="space-y-4">
            <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Event Type</label>
                <InputField type="text" placeholder="e.g., Wedding, Graduation Party" required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-400">Date of Event</label>
                    <InputField type="date" required />
                </div>
                 <div>
                    <label className="block mb-2 text-sm font-medium text-gray-400">Service Needed</label>
                    <SelectField>
                        <option value="">Select Service</option>
                        {SERVICE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                        <option value="BabySitter">Baby Sitter</option>
                    </SelectField>
                </div>
            </div>
             <div>
                <label className="block mb-2 text-sm font-medium text-gray-400">Your Phone Number</label>
                <InputField type="tel" placeholder="0912345678" required />
            </div>
            <button type="submit" className="w-full mt-6 bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-500 transition-colors duration-300">
                Find Help
            </button>
        </form>
    </Modal>
  );
};

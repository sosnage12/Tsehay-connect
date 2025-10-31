
import React from 'react';
import type { HomeWorker } from '../types';

interface WorkerCardProps {
  worker: HomeWorker;
}

// FIX: Changed JSX.Element to React.ReactNode to fix "Cannot find namespace 'JSX'" error.
const InfoRow: React.FC<{ icon: React.ReactNode; label: string; value: string | number }> = ({ icon, label, value }) => (
    <div className="flex items-center text-sm text-gray-300">
        <span className="w-5 h-5 mr-3 text-gray-400">{icon}</span>
        <span className="font-semibold mr-2">{label}:</span>
        <span>{value}</span>
    </div>
);

export const WorkerCard: React.FC<WorkerCardProps> = ({ worker }) => {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={worker.photoUrl} alt={worker.fullName} />
        <div className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold rounded-full ${worker.isAvailable ? 'bg-green-500/80' : 'bg-red-500/80'} text-white`}>
          {worker.isAvailable ? 'Available' : 'Unavailable'}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-yellow-400 mb-1">{worker.fullName}</h3>
        <p className="text-md text-gray-400 font-medium mb-4">{worker.serviceType}</p>
        
        <div className="space-y-3 mb-6 flex-grow">
           <InfoRow icon={<UserIcon />} label="Age" value={worker.age} />
           <InfoRow icon={<StarIcon />} label="Experience" value={`${worker.experience} years`} />
           <InfoRow icon={<BriefcaseIcon />} label="Type" value={worker.employmentType} />
           <InfoRow icon={<AcademicCapIcon />} label="Education" value={worker.educationLevel} />
           <InfoRow icon={<GlobeAltIcon />} label="Languages" value={worker.languages.join(', ')} />
        </div>

        <button className="w-full mt-auto bg-yellow-400 text-gray-900 font-bold py-3 px-4 rounded-lg hover:bg-yellow-300 transition duration-300 flex items-center justify-center">
            <PhoneIcon />
            <span className="ml-2">Contact ({worker.phone})</span>
        </button>
      </div>
    </div>
  );
};


// SVG Icons
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>;
const GlobeAltIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9m-9 9a9 9 0 00-9-9" /></svg>;
const BriefcaseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const AcademicCapIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20M1 12v5a2 2 0 002 2h18a2 2 0 002-2v-5" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>;

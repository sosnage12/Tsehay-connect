
import React from 'react';
import type { FilterState } from '../types';
import {
  SERVICE_TYPES,
  EXPERIENCE_YEARS,
  RELIGIONS,
  EDUCATION_LEVELS,
  LANGUAGES,
  EMPLOYMENT_TYPES,
} from '../constants';

interface FilterBarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onEventClick: () => void;
}

const FilterInput: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <div className={`flex flex-col space-y-2 ${className}`}>{children}</div>
);

const FilterSelect: React.FC<React.SelectHTMLAttributes<HTMLSelectElement>> = (props) => (
    <select {...props} className={`w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 ${props.className}`}>
        {props.children}
    </select>
);

export const FilterBar: React.FC<FilterBarProps> = ({ filters, setFilters, onEventClick }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <input
          type="text"
          name="searchTerm"
          placeholder="Find Service (e.g., 'Nanny', 'Abeba Tesfaye')"
          value={filters.searchTerm}
          onChange={handleInputChange}
          className="w-full p-4 pl-12 text-lg bg-gray-700 border border-gray-600 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Service Type</label>
          <FilterSelect name="serviceType" value={filters.serviceType} onChange={handleInputChange}>
            <option value="">All Services</option>
            {SERVICE_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
          </FilterSelect>
        </FilterInput>

        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Age Range</label>
          <div className="flex items-center space-x-2">
            <input type="number" name="ageFrom" placeholder="From" value={filters.ageFrom} onChange={handleInputChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
            <span className="text-gray-400">-</span>
            <input type="number" name="ageTo" placeholder="To" value={filters.ageTo} onChange={handleInputChange} className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          </div>
        </FilterInput>

        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Experience</label>
          <FilterSelect name="experience" value={filters.experience} onChange={handleInputChange}>
            <option value="">Any Experience</option>
            {EXPERIENCE_YEARS.map(year => <option key={year} value={year.replace('+', '')}>{year} Years</option>)}
          </FilterSelect>
        </FilterInput>

        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Religion</label>
          <FilterSelect name="religion" value={filters.religion} onChange={handleInputChange}>
            <option value="">Any Religion</option>
            {RELIGIONS.map(religion => <option key={religion} value={religion}>{religion}</option>)}
          </FilterSelect>
        </FilterInput>

        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Education</label>
          <FilterSelect name="education" value={filters.education} onChange={handleInputChange}>
            <option value="">Any Education</option>
            {EDUCATION_LEVELS.map(level => <option key={level} value={level}>{level}</option>)}
          </FilterSelect>
        </FilterInput>

        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Language</label>
          <FilterSelect name="language" value={filters.language} onChange={handleInputChange}>
            <option value="">Any Language</option>
            {LANGUAGES.map(lang => <option key={lang} value={lang}>{lang}</option>)}
          </FilterSelect>
        </FilterInput>
        
        <FilterInput>
          <label className="text-sm font-medium text-gray-400">Employment Type</label>
          <FilterSelect name="employmentType" value={filters.employmentType} onChange={handleInputChange}>
            <option value="">All Types</option>
            {EMPLOYMENT_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
          </FilterSelect>
        </FilterInput>

        <div className="flex flex-col justify-end">
            <button onClick={onEventClick} className="w-full h-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition duration-300 shadow-md flex items-center justify-center space-x-2">
                <span>Event Based</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

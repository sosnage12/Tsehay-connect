
import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { WorkerGrid } from './components/WorkerGrid';
import { Footer } from './components/Footer';
import { SignUpModal } from './components/SignUpModal';
import { EventModal } from './components/EventModal';
import { AboutModal } from './components/AboutModal';
import type { HomeWorker, FilterState } from './types';
import { MOCK_WORKERS } from './constants';

const App: React.FC = () => {
  const [allWorkers] = useState<HomeWorker[]>(MOCK_WORKERS);
  const [filteredWorkers, setFilteredWorkers] = useState<HomeWorker[]>(allWorkers);
  const [filters, setFilters] = useState<FilterState>({
    serviceType: '',
    ageFrom: '',
    ageTo: '',
    experience: '',
    religion: '',
    education: '',
    language: '',
    employmentType: '',
    searchTerm: '',
  });

  const [isSignUpModalOpen, setSignUpModalOpen] = useState(false);
  const [isEventModalOpen, setEventModalOpen] = useState(false);
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const applyFilters = useCallback(() => {
    let workers = allWorkers;

    if (filters.searchTerm) {
      workers = workers.filter(worker =>
        worker.fullName.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        worker.serviceType.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }
    if (filters.serviceType) {
        workers = workers.filter(worker => worker.serviceType === filters.serviceType);
    }
    if (filters.ageFrom) {
        workers = workers.filter(worker => worker.age >= parseInt(filters.ageFrom, 10));
    }
    if (filters.ageTo) {
        workers = workers.filter(worker => worker.age <= parseInt(filters.ageTo, 10));
    }
    if (filters.experience) {
        workers = workers.filter(worker => worker.experience.toString() === filters.experience);
    }
    if (filters.religion) {
        workers = workers.filter(worker => worker.religion === filters.religion);
    }
    if (filters.education) {
        workers = workers.filter(worker => worker.educationLevel === filters.education);
    }
    if (filters.language) {
        workers = workers.filter(worker => worker.languages.includes(filters.language));
    }
    if (filters.employmentType) {
        workers = workers.filter(worker => worker.employmentType === filters.employmentType);
    }

    setFilteredWorkers(workers);
  }, [allWorkers, filters]);


  useEffect(() => {
    const timer = setTimeout(() => {
        applyFilters();
    }, 300); // Debounce filter application
    return () => clearTimeout(timer);
  }, [filters, applyFilters]);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex flex-col">
      <Header 
        onSignUpClick={() => setSignUpModalOpen(true)}
        onAboutClick={() => setAboutModalOpen(true)}
      />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">Find Your Perfect Home Helper</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">Connecting you with trained and trusted professionals for all your household needs.</p>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-2xl mb-12">
            <FilterBar filters={filters} setFilters={setFilters} onEventClick={() => setEventModalOpen(true)} />
        </div>

        <WorkerGrid workers={filteredWorkers} />
      </main>
      <Footer />

      <SignUpModal isOpen={isSignUpModalOpen} onClose={() => setSignUpModalOpen(false)} />
      <EventModal isOpen={isEventModalOpen} onClose={() => setEventModalOpen(false)} />
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setAboutModalOpen(false)} />
    </div>
  );
};

export default App;

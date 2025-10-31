
import React from 'react';
import { WorkerCard } from './WorkerCard';
import type { HomeWorker } from '../types';

interface WorkerGridProps {
  workers: HomeWorker[];
}

export const WorkerGrid: React.FC<WorkerGridProps> = ({ workers }) => {
  if (workers.length === 0) {
    return (
        <div className="text-center py-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto h-16 w-16 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-2xl font-semibold text-white">No Results Found</h3>
            <p className="mt-2 text-gray-400">Try adjusting your search filters to find more home workers.</p>
        </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {workers.map(worker => (
        <WorkerCard key={worker.id} worker={worker} />
      ))}
    </div>
  );
};

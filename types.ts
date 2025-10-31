
export interface HomeWorker {
  id: number;
  fullName: string;
  age: number;
  religion: string;
  languages: string[];
  educationLevel: string;
  experience: number; // in years
  serviceType: 'Nanny' | 'Cook' | 'Cleaner';
  phone: string;
  photoUrl: string;
  isAvailable: boolean;
  employmentType: 'Home Based' | 'Part-Time';
}

export interface FilterState {
  serviceType: string;
  ageFrom: string;
  ageTo: string;
  experience: string;
  religion: string;
  education: string;
  language: string;
  employmentType: string;
  searchTerm: string;
}

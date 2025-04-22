import React, { useState, useEffect } from 'react';
import DoctorCard from './DoctorCard';
import DoctorFilter from './DoctorFilter';
import { Doctor, FilterOptions } from '../../types';

interface DoctorDirectoryProps {
  doctors: Doctor[];
  onBookAppointment: (doctorId: string) => void;
}

const DoctorDirectory: React.FC<DoctorDirectoryProps> = ({ doctors = [], onBookAppointment }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    specialty: '',
    availability: false,
    searchTerm: '',
  });
  
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>([]);
  const [isFiltering, setIsFiltering] = useState(false);
  
  useEffect(() => {
    if (!Array.isArray(doctors)) {
      console.warn('doctors prop is not an array');
      return;
    }

    setIsFiltering(true);
    
    const timeoutId = setTimeout(() => {
      let result = [...doctors];
      
      // Filter by specialty
      if (filters.specialty) {
        result = result.filter(doctor => doctor.specialty === filters.specialty);
      }
      
      // Filter by availability
      if (filters.availability) {
        result = result.filter(doctor => doctor.availability.days.length > 0);
      }
      
      // Filter by search term
      if (filters.searchTerm) {
        const term = filters.searchTerm.toLowerCase();
        result = result.filter(
          doctor => 
            doctor.name.toLowerCase().includes(term) || 
            doctor.location.toLowerCase().includes(term)
        );
      }
      
      setFilteredDoctors(result);
      setIsFiltering(false);
    }, 300);
    
    return () => clearTimeout(timeoutId);
  }, [doctors, filters]);
  
  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };
  
  const handleClearFilters = () => {
    setFilters({
      specialty: '',
      availability: false,
      searchTerm: '',
    });
  };
  
  return (
    <div>
      <h2 className="sr-only">Doctor Directory</h2>
      <DoctorFilter
        filters={filters}
        onFilterChange={handleFilterChange}
        onClearFilters={handleClearFilters}
      />
      
      {isFiltering ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md overflow-hidden animate-pulse"
            >
              <div className="w-full h-48 bg-gray-200"></div>
              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2 mb-3"></div>
                <div className="flex items-center mt-2 mb-2">
                  <div className="h-4 bg-gray-200 rounded w-24"></div>
                </div>
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full mt-4"></div>
              </div>
            </div>
          ))}
        </div>
      ) : filteredDoctors.length === 0 ? (
        <div 
          className="bg-white rounded-lg shadow-md p-8 text-center"
          aria-live="polite"
        >
          <p className="text-gray-600">No doctors found matching your criteria.</p>
          <button
            onClick={handleClearFilters}
            className="mt-4 text-blue-600 hover:text-blue-800 underline focus:outline-none"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-live="polite"
        >
          {filteredDoctors.map(doctor => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              onBookAppointment={onBookAppointment}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DoctorDirectory;
import React from 'react';
import { Search, X } from 'lucide-react';
import { FilterOptions } from '../../types';
import { specialties } from '../../data/specialties';

interface DoctorFilterProps {
  filters: FilterOptions;
  onFilterChange: (filters: FilterOptions) => void;
  onClearFilters: () => void;
}

const DoctorFilter: React.FC<DoctorFilterProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
}) => {
  const handleSpecialtyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterChange({ ...filters, specialty: e.target.value });
  };

  const handleAvailabilityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, availability: e.target.checked });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFilterChange({ ...filters, searchTerm: e.target.value });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 transition-all">
      <h2 className="text-lg font-semibold mb-4">Filter Doctors</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-gray-700 mb-1">
            Specialty
          </label>
          <select
            id="specialty"
            value={filters.specialty}
            onChange={handleSpecialtyChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Filter by specialty"
          >
            <option value="">All Specialties</option>
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
        </div>
        
        <div className="relative">
          <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
            Search by Name or Location
          </label>
          <div className="relative">
            <input
              id="search"
              type="text"
              placeholder="Search..."
              value={filters.searchTerm}
              onChange={handleSearchChange}
              className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Search by name or location"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            id="availability"
            type="checkbox"
            checked={filters.availability}
            onChange={handleAvailabilityChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            aria-label="Show only available doctors"
          />
          <label htmlFor="availability" className="ml-2 block text-sm text-gray-700">
            Show only available doctors
          </label>
        </div>
        
        <button
          onClick={onClearFilters}
          className="flex items-center text-sm text-blue-600 hover:text-blue-800 focus:outline-none focus:underline"
          aria-label="Clear all filters"
        >
          <X size={16} className="mr-1" />
          Clear filters
        </button>
      </div>
    </div>
  );
};

export default DoctorFilter;
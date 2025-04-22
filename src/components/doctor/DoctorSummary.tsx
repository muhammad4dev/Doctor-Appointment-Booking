import React from 'react';
import { User, MapPin } from 'lucide-react';
import { Doctor } from '../../types';

interface DoctorSummaryProps {
  doctor: Doctor;
  className?: string;
}

const DoctorSummary: React.FC<DoctorSummaryProps> = ({ doctor, className = '' }) => {
  return (
    <div className={`flex items-center p-4 bg-gray-50 rounded-lg ${className}`}>
      {doctor.photoUrl ? (
        <img
          src={doctor.photoUrl}
          alt={`Dr. ${doctor.name}`}
          className="w-16 h-16 rounded-full object-cover mr-4"
        />
      ) : (
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
          <User size={24} className="text-gray-500" />
        </div>
      )}
      
      <div>
        <h3 className="font-medium text-lg">{doctor.name}</h3>
        <p className="text-blue-600">{doctor.specialty}</p>
        <div className="flex items-center text-gray-600 text-sm mt-1">
          <MapPin size={14} className="mr-1" />
          {doctor.location}
        </div>
      </div>
    </div>
  );
};

export default DoctorSummary;
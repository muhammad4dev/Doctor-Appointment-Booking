import React from 'react';
import { Star } from 'lucide-react';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  const renderRating = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <Star
          key={index}
          size={16}
          className={`${
            index < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'
          }`}
        />
      ));
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      tabIndex={0}
      aria-label={`Doctor ${doctor.name}, ${doctor.specialty}`}
    >
      <img 
        src={doctor.photoUrl} 
        alt={`Dr. ${doctor.name}`} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{doctor.name}</h3>
        <p className="text-blue-600">{doctor.specialty}</p>
        <div className="flex items-center mt-2">
          {renderRating(doctor.rating)}
          <span className="ml-1 text-sm text-gray-600">{doctor.rating.toFixed(1)}</span>
        </div>
        <p className="mt-2 text-gray-600">
          <span className="font-medium">{doctor.experience}</span> years experience
        </p>
        <p className="text-gray-600">{doctor.location}</p>
        <div className="mt-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {doctor.availability.days.map((day) => (
              <span 
                key={day} 
                className="px-2 py-1 text-xs bg-green-100 text-green-800 rounded"
              >
                {day}
              </span>
            ))}
          </div>
        </div>
        <button
          onClick={() => onBookAppointment(doctor.id)}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
          aria-label={`Book appointment with Dr. ${doctor.name}`}
        >
          Book Appointment
        </button>
      </div>
    </div>
  );
};

export default DoctorCard;
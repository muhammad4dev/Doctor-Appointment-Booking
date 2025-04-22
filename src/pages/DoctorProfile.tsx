import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctors';
import BookingModal from '../components/booking/BookingModal';
import { useState } from 'react';

const DoctorProfile = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [showBooking, setShowBooking] = useState(false);

  const doctor = doctors.find(d => d.id === id);

  if (!doctor) {
    return (
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Doctor Not Found</h1>
        <button
          onClick={() => navigate('/doctors')}
          className="text-blue-600 hover:text-blue-800"
        >
          Back to Doctors List
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img
          src={doctor.photoUrl}
          alt={doctor.name}
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
        />
        <h1 className="text-2xl font-bold text-center mb-2">{doctor.name}</h1>
        <p className="text-blue-600 text-center mb-4">{doctor.specialty}</p>
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h2 className="font-medium text-gray-700">Experience</h2>
              <p>{doctor.experience} years</p>
            </div>
            <div>
              <h2 className="font-medium text-gray-700">Location</h2>
              <p>{doctor.location}</p>
            </div>
          </div>
          <button
            onClick={() => setShowBooking(true)}
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Book Appointment
          </button>
        </div>
      </div>

      {showBooking && (
        <BookingModal
          doctor={doctor}
          onClose={() => setShowBooking(false)}
        />
      )}
    </div>
  );
};

export default DoctorProfile;
import React, { useState } from 'react';
import DoctorDirectory from './components/doctor/DoctorDirectory';
import BookingModal from './components/booking/BookingModal';
import AppointmentList from './components/appointments/AppointmentList';
import { AppointmentProvider } from './contexts/AppointmentContext';
import { Doctor } from './types';
import { doctors } from './data/doctors';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const handleBookAppointment = (doctorId: string) => {
    const doctor = doctors.find(d => d.id === doctorId);
    if (doctor) {
      setSelectedDoctor(doctor);
    }
  };

  return (
    <AppointmentProvider>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <h1 className="text-2xl font-bold text-gray-900">Doctor Appointment Booking</h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <DoctorDirectory doctors={doctors} onBookAppointment={handleBookAppointment} />
            </div>
            <div>
              <AppointmentList />
            </div>
          </div>
        </main>

        {selectedDoctor && (
          <BookingModal
            doctor={selectedDoctor}
            onClose={() => setSelectedDoctor(null)}
          />
        )}
      </div>
    </AppointmentProvider>
  );
}

export default App;
import React from 'react';
import { Calendar as CalendarIcon, X } from 'lucide-react';
import { useAppointments } from '../../contexts/AppointmentContext';
import { Appointment } from '../../types';

const AppointmentList: React.FC = () => {
  const { appointments, doctors, cancelAppointment, addToCalendar } = useAppointments();

  const getDoctor = (doctorId: string) => {
    return doctors.find(d => d.id === doctorId);
  };

  const sortedAppointments = [...appointments].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return dateA.getTime() - dateB.getTime();
  });

  const upcomingAppointments = sortedAppointments.filter(
    app => app.status === 'scheduled' && new Date(`${app.date} ${app.time}`) > new Date()
  );

  if (upcomingAppointments.length === 0) {
    return (
      <div className="text-center py-8 bg-white rounded-lg shadow-sm">
        <CalendarIcon className="mx-auto text-gray-400 mb-3" size={32} />
        <h3 className="text-lg font-medium text-gray-900 mb-1">No Upcoming Appointments</h3>
        <p className="text-gray-600">When you book an appointment, it will appear here.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Upcoming Appointments</h2>
      {upcomingAppointments.map((appointment: Appointment) => {
        const doctor = getDoctor(appointment.doctorId);
        if (!doctor) return null;

        return (
          <div
            key={appointment.id}
            className="bg-white rounded-lg shadow-sm p-4 border border-gray-200"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium">{doctor.name}</h3>
                <p className="text-blue-600">{doctor.specialty}</p>
                <p className="text-gray-600 text-sm mt-1">{doctor.location}</p>
                <div className="mt-2">
                  <p className="text-gray-800">
                    {new Date(appointment.date).toLocaleDateString('en-US', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                  <p className="text-gray-800">{appointment.time}</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => addToCalendar(appointment, doctor)}
                  className="px-3 py-1 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                  aria-label="Add to calendar"
                >
                  <CalendarIcon size={18} />
                </button>
                <button
                  onClick={() => cancelAppointment(appointment.id)}
                  className="px-3 py-1 text-red-600 hover:bg-red-50 rounded-md transition-colors"
                  aria-label="Cancel appointment"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AppointmentList;
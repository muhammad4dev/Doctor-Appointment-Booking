import React, { createContext, useState, useContext, useEffect } from 'react';
import { Appointment, Doctor } from '../types';
import { doctors } from '../data/doctors';

interface AppointmentContextType {
  appointments: Appointment[];
  doctors: Doctor[];
  bookAppointment: (appointment: Omit<Appointment, 'id' | 'status'>) => void;
  cancelAppointment: (appointmentId: string) => void;
  addToCalendar: (appointment: Appointment, doctor: Doctor) => void;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<Appointment[]>(() => {
    const savedAppointments = localStorage.getItem('appointments');
    return savedAppointments ? JSON.parse(savedAppointments) : [];
  });
  
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);
  
  const bookAppointment = (appointmentData: Omit<Appointment, 'id' | 'status'>) => {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: crypto.randomUUID(),
      status: 'scheduled',
    };
    
    setAppointments(prev => [...prev, newAppointment]);
  };
  
  const cancelAppointment = (appointmentId: string) => {
    setAppointments(prev =>
      prev.map(appointment =>
        appointment.id === appointmentId
          ? { ...appointment, status: 'cancelled' }
          : appointment
      )
    );
  };
  
  const addToCalendar = (appointment: Appointment, doctor: Doctor) => {
    // Format Google Calendar URL
    const startDate = new Date(`${appointment.date} ${appointment.time}`);
    const endDate = new Date(startDate.getTime() + 30 * 60000); // Add 30 minutes
    
    const formatDate = (date: Date) => {
      return date
        .toISOString()
        .replace(/-|:|\.\d+/g, '');
    };
    
    const summary = `Appointment with Dr. ${doctor.name}`;
    const location = doctor.location;
    const description = `Specialty: ${doctor.specialty}\nPatient: ${appointment.patientName}`;
    
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      summary
    )}&dates=${formatDate(startDate)}/${formatDate(
      endDate
    )}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(
      location
    )}&sf=true&output=xml`;
    
    window.open(url, '_blank');
  };
  
  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        doctors,
        bookAppointment,
        cancelAppointment,
        addToCalendar,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};
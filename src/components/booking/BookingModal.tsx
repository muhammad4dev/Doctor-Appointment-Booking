import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Doctor } from '../../types';
import DoctorSummary from '../doctor/DoctorSummary';
import Calendar from './Calendar';
import TimeSlotPicker from './TimeSlotPicker';
import PatientForm from './PatientForm';
import { useAppointments } from '../../contexts/AppointmentContext';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
}

const BookingModal: React.FC<BookingModalProps> = ({ doctor, onClose }) => {
  const { bookAppointment } = useAppointments();
  const [step, setStep] = useState<'date' | 'time' | 'info'>('date');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [patientInfo, setPatientInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const availableDates = doctor.availability.slots.map(slot => slot.date);
  const availableTimes = selectedDate
    ? doctor.availability.slots.find(slot => slot.date === selectedDate)?.times || []
    : [];

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep('time');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep('info');
  };

  const handlePatientInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPatientInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookAppointment({
      doctorId: doctor.id,
      patientName: patientInfo.name,
      patientEmail: patientInfo.email,
      patientPhone: patientInfo.phone,
      date: selectedDate,
      time: selectedTime,
    });
    onClose();
  };

  const handleBack = () => {
    if (step === 'time') setStep('date');
    if (step === 'info') setStep('time');
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-labelledby="booking-modal-title"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 id="booking-modal-title" className="text-xl font-semibold">
            Book Appointment
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close booking modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-4">
          <DoctorSummary doctor={doctor} className="mb-6" />

          {step === 'date' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Select Date</h3>
              <Calendar
                availableDates={availableDates}
                selectedDate={selectedDate}
                onSelectDate={handleDateSelect}
              />
            </div>
          )}

          {step === 'time' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Select Time</h3>
              <TimeSlotPicker
                availableTimes={availableTimes}
                selectedTime={selectedTime}
                onSelectTime={handleTimeSelect}
              />
              <button
                onClick={handleBack}
                className="mt-4 text-blue-600 hover:text-blue-800"
              >
                &larr; Back to date selection
              </button>
            </div>
          )}

          {step === 'info' && (
            <div>
              <h3 className="text-lg font-medium mb-4">Patient Information</h3>
              <PatientForm
                patientInfo={patientInfo}
                onChange={handlePatientInfoChange}
                onSubmit={handleSubmit}
                onBack={handleBack}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
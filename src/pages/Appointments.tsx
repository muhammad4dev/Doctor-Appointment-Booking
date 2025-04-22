import AppointmentList from '../components/appointments/AppointmentList';

const Appointments = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Your Appointments</h1>
      <AppointmentList />
    </div>
  );
};

export default Appointments;
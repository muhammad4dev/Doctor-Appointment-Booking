import DoctorDirectory from '../components/doctor/DoctorDirectory';
import { doctors } from '../data/doctors';
import { useNavigate } from 'react-router-dom';

const DoctorList = () => {
  const navigate = useNavigate();

  const handleBookAppointment = (doctorId: string) => {
    navigate(`/doctors/${doctorId}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Available Doctors</h1>
      <DoctorDirectory doctors={doctors} onBookAppointment={handleBookAppointment} />
    </div>
  );
};

export default DoctorList;
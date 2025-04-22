import { NavLink } from 'react-router-dom';
import { Calendar, Users } from 'lucide-react';
import { useAppointments } from '../../contexts/AppointmentContext';

const Navigation = () => {
  const { appointments } = useAppointments();

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <NavLink 
            to="/" 
            className="text-2xl font-bold text-gray-900"
          >
            Doctor Booking
          </NavLink>
          
          <div className="flex items-center space-x-6">
            <NavLink
              to="/doctors"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Users size={20} />
              <span>Doctors</span>
            </NavLink>
            
            <NavLink
              to="/appointments"
              className={({ isActive }) =>
                `flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors ${
                  isActive ? 'text-blue-600' : ''
                }`
              }
            >
              <Calendar size={20} />
              <span>Appointments{appointments.length > 0 && ` (${appointments.length})`}</span>
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
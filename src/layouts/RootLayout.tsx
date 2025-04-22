import { Outlet } from 'react-router-dom';
import Navigation from '../components/common/Navigation';
import { AppointmentProvider } from '../contexts/AppointmentContext';

const RootLayout = () => {
  return (
    <AppointmentProvider>
      <div className="min-h-screen bg-gray-100">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Outlet />
        </main>
      </div>
    </AppointmentProvider>
  );
};

export default RootLayout;
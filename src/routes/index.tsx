import { createBrowserRouter, Navigate, RouteObject } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import RootLayout from '../layouts/RootLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { useAppointments } from '../contexts/AppointmentContext';

// Lazy-loaded components
const Home = lazy(() => import('../pages/Home'));
const DoctorList = lazy(() => import('../pages/DoctorList'));
const DoctorProfile = lazy(() => import('../pages/DoctorProfile'));
const Appointments = lazy(() => import('../pages/Appointments'));
const NotFound = lazy(() => import('../pages/NotFound'));

// Protected route wrapper
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { appointments } = useAppointments();
  
  if (appointments.length === 0) {
    return <Navigate to="/" replace />;
  }
  
  return <>{children}</>;
};

// Route configuration
const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: 'doctors',
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <DoctorList />
              </Suspense>
            ),
          },
          {
            path: ':id',
            element: (
              <Suspense fallback={<LoadingSpinner />}>
                <DoctorProfile />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: 'appointments',
        element: (
          <ProtectedRoute>
            <Suspense fallback={<LoadingSpinner />}>
              <Appointments />
            </Suspense>
          </ProtectedRoute>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<LoadingSpinner />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
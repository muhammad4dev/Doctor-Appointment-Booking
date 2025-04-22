import { Doctor } from '../types';

export const doctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiology',
    experience: 12,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      slots: [
        {
          date: '2025-05-01',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM']
        },
        {
          date: '2025-05-03',
          times: ['09:00 AM', '10:00 AM', '11:00 AM']
        },
        {
          date: '2025-05-05',
          times: ['02:00 PM', '03:00 PM', '04:00 PM']
        }
      ]
    },
    location: 'Seattle Medical Center',
    rating: 4.8,
    photoUrl: 'https://images.pexels.com/photos/5214964/pexels-photo-5214964.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Dr. Michael Chen',
    specialty: 'Neurology',
    experience: 15,
    availability: {
      days: ['Tuesday', 'Thursday'],
      slots: [
        {
          date: '2025-05-02',
          times: ['08:00 AM', '09:00 AM', '01:00 PM', '02:00 PM']
        },
        {
          date: '2025-05-04',
          times: ['10:00 AM', '11:00 AM', '03:00 PM', '04:00 PM']
        }
      ]
    },
    location: 'Northwest Neurology Center',
    rating: 4.9,
    photoUrl: 'https://images.pexels.com/photos/4173239/pexels-photo-4173239.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Pediatrics',
    experience: 8,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      slots: [
        {
          date: '2025-05-01',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM']
        },
        {
          date: '2025-05-02',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM']
        },
        {
          date: '2025-05-03',
          times: ['09:00 AM', '10:00 AM', '11:00 AM']
        }
      ]
    },
    location: 'Children\'s Wellness Clinic',
    rating: 4.7,
    photoUrl: 'https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Dr. James Wilson',
    specialty: 'Orthopedics',
    experience: 20,
    availability: {
      days: ['Monday', 'Wednesday', 'Friday'],
      slots: [
        {
          date: '2025-05-01',
          times: ['08:00 AM', '09:00 AM', '10:00 AM', '02:00 PM', '03:00 PM']
        },
        {
          date: '2025-05-03',
          times: ['08:00 AM', '09:00 AM', '01:00 PM', '02:00 PM']
        }
      ]
    },
    location: 'Orthopedic Specialists',
    rating: 4.6,
    photoUrl: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'Dr. Sophia Patel',
    specialty: 'Dermatology',
    experience: 10,
    availability: {
      days: ['Tuesday', 'Thursday'],
      slots: [
        {
          date: '2025-05-02',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM', '04:00 PM']
        },
        {
          date: '2025-05-04',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM']
        }
      ]
    },
    location: 'Advanced Skincare Center',
    rating: 4.9,
    photoUrl: 'https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '6',
    name: 'Dr. Robert Kim',
    specialty: 'Family Medicine',
    experience: 14,
    availability: {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      slots: [
        {
          date: '2025-05-01',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM']
        },
        {
          date: '2025-05-02',
          times: ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM']
        },
        {
          date: '2025-05-03',
          times: ['09:00 AM', '10:00 AM', '02:00 PM']
        }
      ]
    },
    location: 'Community Health Partners',
    rating: 4.7,
    photoUrl: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];
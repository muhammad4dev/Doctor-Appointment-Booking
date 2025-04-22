export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  availability: {
    days: string[];
    slots: {
      date: string;
      times: string[];
    }[];
  };
  location: string;
  rating: number;
  photoUrl: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  patientName: string;
  patientEmail: string;
  patientPhone: string;
  date: string;
  time: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}

export interface FilterOptions {
  specialty: string;
  availability: boolean;
  searchTerm: string;
}
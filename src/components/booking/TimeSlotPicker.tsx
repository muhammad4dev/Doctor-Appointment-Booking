import React from 'react';
import { Clock } from 'lucide-react';

interface TimeSlotPickerProps {
  availableTimes: string[];
  selectedTime: string;
  onSelectTime: (time: string) => void;
}

const TimeSlotPicker: React.FC<TimeSlotPickerProps> = ({
  availableTimes,
  selectedTime,
  onSelectTime,
}) => {
  if (availableTimes.length === 0) {
    return (
      <div className="text-center p-6 bg-gray-50 rounded-lg">
        <Clock className="mx-auto text-gray-400 mb-2" size={24} />
        <p className="text-gray-600">No available time slots for the selected date.</p>
      </div>
    );
  }
  
  return (
    <div aria-label="Time slot selection">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {availableTimes.map(time => (
          <button
            key={time}
            onClick={() => onSelectTime(time)}
            className={`
              py-3 px-4 border rounded-md text-center text-sm focus:outline-none focus:ring-2 focus:ring-blue-500
              transition-all duration-200
              ${
                selectedTime === time
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white hover:bg-blue-50 border-gray-300'
              }
            `}
            aria-selected={selectedTime === time}
            aria-label={`Select time slot: ${time}`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotPicker;
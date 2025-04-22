import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarProps {
  availableDates: string[];
  selectedDate: string;
  onSelectDate: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  availableDates,
  selectedDate,
  onSelectDate,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<Date[]>([]);
  
  useEffect(() => {
    generateCalendarDays(currentMonth);
  }, [currentMonth]);
  
  const generateCalendarDays = (month: Date) => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    
    // Get the first day of the month
    const firstDay = new Date(year, monthIndex, 1);
    const firstDayOfWeek = firstDay.getDay();
    
    // Get the last day of the month
    const lastDay = new Date(year, monthIndex + 1, 0);
    
    // Create array for all days in the calendar view
    const days: Date[] = [];
    
    // Add days from previous month to fill the first week
    for (let i = firstDayOfWeek; i > 0; i--) {
      const prevMonthDay = new Date(year, monthIndex, 1 - i);
      days.push(prevMonthDay);
    }
    
    // Add all days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(new Date(year, monthIndex, i));
    }
    
    // Add days from next month to complete the last week
    const remainingDays = 7 - (days.length % 7);
    if (remainingDays < 7) {
      for (let i = 1; i <= remainingDays; i++) {
        days.push(new Date(year, monthIndex + 1, i));
      }
    }
    
    setCalendarDays(days);
  };
  
  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };
  
  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };
  
  const formatDate = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };
  
  const isDateAvailable = (date: Date): boolean => {
    const dateString = formatDate(date);
    return availableDates.includes(dateString);
  };
  
  const isCurrentMonth = (date: Date): boolean => {
    return date.getMonth() === currentMonth.getMonth();
  };
  
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  
  const isSelected = (date: Date): boolean => {
    return formatDate(date) === selectedDate;
  };
  
  const handleDateClick = (date: Date) => {
    if (isDateAvailable(date)) {
      onSelectDate(formatDate(date));
    }
  };
  
  const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="bg-white rounded-lg shadow-sm" aria-label="Calendar">
      <div className="flex justify-between items-center p-4 border-b">
        <button
          onClick={goToPreviousMonth}
          className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label="Previous month"
        >
          <ChevronLeft size={20} />
        </button>
        <h4 className="font-medium">
          {currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
        </h4>
        <button
          onClick={goToNextMonth}
          className="p-2 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
          aria-label="Next month"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 p-4">
        {weekdays.map(day => (
          <div key={day} className="text-center font-medium text-sm text-gray-600 py-2">
            {day}
          </div>
        ))}
        
        {calendarDays.map((day, i) => {
          const dayIsAvailable = isDateAvailable(day);
          const isCurrentMonthDay = isCurrentMonth(day);
          const dayIsToday = isToday(day);
          const dayIsSelected = isSelected(day);
          
          return (
            <button
              key={i}
              onClick={() => handleDateClick(day)}
              disabled={!dayIsAvailable}
              className={`
                aspect-square flex items-center justify-center p-2 text-sm rounded-full
                focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all
                ${!isCurrentMonthDay ? 'text-gray-400' : ''}
                ${dayIsToday ? 'border border-blue-500' : ''}
                ${dayIsSelected ? 'bg-blue-500 text-white' : ''}
                ${
                  dayIsAvailable && !dayIsSelected
                    ? 'hover:bg-blue-100 text-blue-800'
                    : !dayIsAvailable
                    ? 'cursor-not-allowed opacity-50'
                    : ''
                }
              `}
              aria-label={`${day.getDate()} ${day.toLocaleDateString('en-US', { month: 'long' })} ${
                dayIsAvailable ? 'Available' : 'Not Available'
              }`}
              aria-selected={dayIsSelected}
              aria-disabled={!dayIsAvailable}
            >
              {day.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
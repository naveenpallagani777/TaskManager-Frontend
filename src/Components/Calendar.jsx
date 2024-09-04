import React, { useState } from 'react';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const changeMonth = (direction) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + direction));
    setCurrentDate(new Date(newDate));
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <button 
          onClick={() => changeMonth(-1)} 
          className="text-gray-600 hover:text-gray-800">
          Previous
        </button>
        <div className="text-lg font-semibold">
          {currentDate.toLocaleString('default', { month: 'long' })} {year}
        </div>
        <button 
          onClick={() => changeMonth(1)} 
          className="text-gray-600 hover:text-gray-800">
          Next
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2 text-center font-medium">
        {daysOfWeek.map((day, index) => (
          <div key={index} className="text-gray-500">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-2 mt-2">
        {Array.from({ length: firstDayOfMonth }, (_, i) => (
          <div key={i}></div>
        ))}
        {daysArray.map((day) => (
          <div key={day} className="p-2 rounded-full hover:bg-blue-500 hover:text-white cursor-pointer">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;

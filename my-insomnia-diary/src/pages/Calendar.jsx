import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Datepicker } from 'flowbite-react';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Write Your Daily
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full">
          <Datepicker
            inline
            value={selectedDate}
            onSelectedDateChanged={handleDatePickerChange}
          />
        </div>

        <div className="flex flex-col gap-2 mt-3">
          <span className="text-lg font-semibold">
            {selectedDate.toLocaleDateString()}
          </span>
          <Link
            to={`/write`}
            className="rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
          >
            Write Sleep diary
          </Link>
        </div>
      </div>
    </>
  );
};

export default Calendar;

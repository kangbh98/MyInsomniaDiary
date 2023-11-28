import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Datepicker } from 'flowbite-react';
import BottomBar from '../components/BottomBar';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const navigateTo = useNavigate();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 3);
  const handleDatePickerChange = (date) => {
    setSelectedDate(date);
    console.log(date);

    navigateTo('/diary');
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Write Your Daily
          </h2>
        </div>

        <div className="mt-10 mx-auto w-full text-center">
          <Datepicker
            className="mx-auto"
            inline
            value={selectedDate}
            onSelectedDateChanged={handleDatePickerChange}
            minDate={sixMonthsAgo}
            maxDate={new Date()}
          />
        </div>

        <div className="flex flex-col gap-2 mt-3 text-center">
          <span className="text-lg font-semibold">
            {selectedDate.toLocaleDateString()}
          </span>
          <Link
            to={`/write`}
            className="mx-auto  rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
          >
            Write Sleep diary
          </Link>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Calendar;

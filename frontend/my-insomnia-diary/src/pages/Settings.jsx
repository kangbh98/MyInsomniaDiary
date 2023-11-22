import { Link } from 'react-router-dom';
import BottomBar from '../components/BottomBar';
import React, { useState } from 'react';


const Settings = () => {
  const [isAlarmOn, setIsAlarmOn] = useState(false);

  const toggleAlarm = () => {
    setIsAlarmOn(!isAlarmOn);
  };

  return (
    <>
      <Link
        to={`/first`}
        className="mx-auto  rounded-md bg-indigo-500 px-2.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 text-center"
      >
        LogOut
      </Link>
    <div className="flex flex-col align-middle text-center h-full ">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm align-middle text-center">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Settings
          </h2>
      </div>


      <div className="border-b pb-10 mt-10 flex flex-col justify-center gap-2 align-middle text-center">
          <div className="mx-10 py-6 ring-1 rounded-lg ring-gray-200 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center">
          <span className="font-semibold mr-2">
            My Page
          </span>
          <img className="rounded-lg" src="/images/user.png" style={{width:'18px'}}></img>
          </div>

          <div className="mx-10 py-6 ring-1 rounded-lg ring-gray-200 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center">
          <span className="font-semibold mr-2">
            Help
          </span>
          <img className="rounded-lg" src="/images/question.png" style={{width:'18px'}}></img>
          </div>
          <div className="mx-10 py-6 ring-1 rounded-lg ring-gray-200 hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center">
          <span className="font-semibold mr-2">
            Updates & Versions
          </span>
          <img className="rounded-lg" src="/images/info.png" style={{width:'18px'}}></img>
          </div>
          </div>
          <div className="flex flex-row justify-center text-center w-full pt-2 pb-4 border-b">
          <div className="mx-10 py-6 flex items-center justify-center">
          <span className="font-semibold mr-2">
            Alarm Set
          </span>
          <img className="rounded-lg" src="/images/bell.png" style={{width:'18px'}}></img>
          </div>
            <button className="mx-10 bg-purple-600 
            hover:bg-purple-700 text-white font-semibold px-5 mt-2 rounded-lg" onClick={toggleAlarm}
            >
            {isAlarmOn ? 'On' : 'Off'}
            </button>
          </div>
        </div>
    <BottomBar />
    </>
  );
};

export default Settings;

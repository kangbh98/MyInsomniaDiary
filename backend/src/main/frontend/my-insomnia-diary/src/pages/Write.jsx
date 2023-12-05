import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import moment from "moment";

function Write() {
    //없으면 그냥 일단 물음표 넣음
  const baseUrl = "http://localhost:8080";
  const onClickSubmit = () => {

    console.log("click submit");

    axios
        .post(`${baseUrl}/generate/sleepDiary?caffeineIntake=${caffeineIntake}&caffeineIntakeTime=${caffeineIntakeTime}&Exercise=${exercise}&ExerciseTime=${exerciseTime}&pill=${pillDosage}&SleepTime=${sleepTime}&wakeUpTime=${wakeUpTime}`)
        .then( () => {

          // 작업 완료 되면 페이지 이동(새로고침)
          document.location.href = `/writediary`;
        })
        .catch((error) => {
          console.error(error); // 에러가 발생한 경우 에러 내용을 출력
          alert("일기 전송 실패."); // 에러가 발생한 경우 알림 추가
        });
  }

  const handleCaffeineIntake = (e) => {
    setInputCaffeineIntake(e.target.value);
  };
  const [caffeineIntake, setInputCaffeineIntake] = useState("");

  const handleCaffeineIntakeTime = (e) => {
    setInputCaffeineIntakeTime(e.target.value);
  };
  const [caffeineIntakeTime, setInputCaffeineIntakeTime] = useState("");

  const handleExercise = (e) => {
    setInputExercise(e.target.value);
  };
  const [exercise, setInputExercise] = useState("");

  const handleExerciseTime = (e) => {
    setInputExerciseTime(e.target.value);
  };
  const [exerciseTime, setInputExerciseTime] = useState("");

  const handlePill = (e) => {
    setInputPill(e.target.value);
  };
  const [inputPill, setInputPill] = useState("");

  const handlePillDosage = (e) => {
    setInputPillDosage(e.target.value);
  };
  const [pillDosage, setInputPillDosage] = useState("");

  const handleSleepTime = (e) => {
    setInputSleepTime(e.target.value);
  };
  const [sleepTime, setInputSleepTime] = useState("");

  const handleWakeUpTime = (e) => {
    setInputWakeUpTimeTime(e.target.value);
  };
  const [wakeUpTime, setInputWakeUpTimeTime] = useState("");



  return (
      <>
        <form className="pb-32" onSubmit={onClickSubmit}>
          <div className="space-y-4">
            <div className="border-b border-gray-900/10 pb-12">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
              </h2>
              <p className="mt-1 text-sm leading-6 text-gray-600">
                Write a sleep diary
              </p>

              {/* Caffeine */}
              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4">
                  <legend className="text-md font-extrabold leading-6 text-gray-900">
                    Caffeine
                  </legend>
                </div>
                <div className="mt-2 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                  <fieldset>
                    <p className="mt-1 font-semibold text-sm leading-6 text-gray-600">
                      Caffeine Dosage (mg)
                    </p>
                    <div className="mt-2 flex flex-row justify-end">
                      <div className="mt-2 flex flex-row justify-end">
                        <div className="w-20 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                              type="text"
                              name="CaffeineIntake"
                              id="CaffeineIntake"
                              autoComplete="CaffeineIntake"
                              className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                              onChange={handleCaffeineIntake}
                              value={caffeineIntake}
                          />
                        </div>
                        <span className="my-auto ml-2">mg</span>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="caffeineIntakeTime"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last Dosage time (H before sleep)
                    </label>
                    <div className="mt-2 flex flex-row justify-end">
                      <div className="w-20 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="caffeineIntakeTime"
                            id="caffeineIntakeTime"
                            autoComplete="caffeineIntakeTime"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handleCaffeineIntakeTime}
                            value={caffeineIntakeTime}
                        />
                      </div>
                      <span className="my-auto ml-2">h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Workout */}
              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4">
                  <legend className="text-md font-extrabold leading-6 text-gray-900">
                    Workout
                  </legend>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="exercise"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Workout total time
                    </label>
                    <div className="mt-2 flex flex-row justify-end">
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="exercise"
                            id="exercise"
                            autoComplete="exercise"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handleExercise}
                            value={exercise}
                        />
                      </div>
                      <span className="my-auto ml-2">h</span>
                    </div>
                  </div>

                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="exerciseTime"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Last Workout time (H before sleep)
                    </label>
                    <div className="mt-2 flex flex-row justify-end">
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="exerciseTime"
                            id="exerciseTime"
                            autoComplete="exerciseTime"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handleExerciseTime}
                            value={exerciseTime}
                        />
                      </div>
                      <span className="my-auto ml-2">h</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pills */}
              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4">
                  <legend className="text-md font-extrabold leading-6 text-gray-900">
                    Pills
                  </legend>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="pillType"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Pill before your sleep
                    </label>
                    <div className="mt-2 flex flex-row justify-between">
                      <div>
                        <label
                            htmlFor="pill"
                            className="block text-sm font-semibold leading-6 text-gray-900"
                        >
                          Type
                        </label>
                        <div
                            className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                          <input
                              type="text"
                              name="pill"
                              id="pill"
                             autoComplete="pill"
                             className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                             onChange={handlePill}
                              value={inputPill}
                          />
                        </div>
                      </div>
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="pillDosage"
                            id="pillDosage"
                            autoComplete="pillDosage"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handlePillDosage}
                            value={pillDosage}
                        />
                      </div>
                      <span className="my-auto ml-2">mg</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Fill in the data */}
              <div className="border-b border-gray-900/10 pb-6">
                <div className="mt-4">
                  <legend className="text-md font-extrabold leading-6 text-gray-900">
                    Fill in the data
                  </legend>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="Sleep_Time"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Total Sleep time
                    </label>
                    <div className="mt-2 flex flex-row justify-end">
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="SleepTime"
                            id="SleepTime"
                            autoComplete="SleepTime"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900
                        placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handleSleepTime}
                            value={sleepTime}
                        />
                      </div>
                      <span className="my-auto ml-2">h</span>
                    </div>
                  </div>

                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="wakeUpTime"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Number of times you woke up
                    </label>
                    <div className="mt-2 flex flex-row justify-end">
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                            type="text"
                            name="wakeUpTime"
                            id="wakeUpTime"
                            autoComplete="wakeUpTime"
                            className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                            onChange={handleWakeUpTime}
                            value={wakeUpTime}
                        />
                      </div>
                      <span className="my-auto ml-2">times</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
            <Link
                to={`/calendar`}
                className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </Link>


            <button type="submit" className='py-3 px-6 ring-1
          rounded-lg bg-indigo-500 ring-indigo-200 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center font-semibold text-sm font-semibold leading-6 text-gray-900 btn btn-primary'>Next
            </button>
          </div>
        </form>
      </>
  );
}
export default Write;
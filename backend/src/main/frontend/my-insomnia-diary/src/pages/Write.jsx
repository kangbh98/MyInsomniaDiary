import { Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import moment from "moment";

const caffeineIntake = [
  { value: 0, name: 'None' },
  { value: 100, name: '100' },
  { value: 150, name: '150' },
  { value: 200, name: '200' },
  { value: 250, name: '250' },
  { value: 300, name: '300' },
];

const pillDosage = [
  { value: 1, name: '1' },
  { value: 2, name: '2' },
  { value: 3, name: '3' },
];

const pill = [
  { value: "", name: 'none'},
  { value: "a", name: 'type1💊' },
  { value: "b", name: 'type2💊' },
  { value: "c", name: 'type3💊' },
];

function Write() {

  const location = useLocation();//url 쿼리 정보 받아오기 위한 훅
  const searchParams = new URLSearchParams(location.search); //search에서 쿼리 파라미터 정보를 받아옴
  const dateParam = searchParams.get('date'); //date값 가져오기
  const formattedDate = dateParam ? moment(dateParam, 'YYYY.MM.DD').format('YYYY-MM-DD') : '?'; //만약 날짜정보 존재하면 그 날짜를 formattedDate에 넣고 표시
  //없으면 그냥 일단 물음표 넣음
  const baseUrl = "http://localhost:8080";


  const onClickSubmit = () => {
    const requestData = {
      date: encodeURIComponent(formattedDate),
      caffeineIntake: encodeURIComponent(JSON.stringify(selectedCaffeineIntake)),
      caffeineIntakeTime: encodeURIComponent(caffeineIntakeTime),
      Exercise: encodeURIComponent(exercise),
      ExerciseTime: encodeURIComponent(exerciseTime),
      pill: encodeURIComponent(inputPill),
      pillDosage: encodeURIComponent(JSON.stringify(inputPillDosage)),
      SleepTime: encodeURIComponent(sleepTime),
      wakeUpTime: encodeURIComponent(wakeUpTime),
    };

    const queryString = Object.keys(requestData)
        .map((key) => `${key}=${requestData[key]}`)
        .join("&");

    axios
        .post(`${baseUrl}/generate/sleepDiary?${queryString}`)
        .then(() => {
          // 작업 완료되면 페이지 이동(새로고침)
          document.location.href = `/writediary?date=${formattedDate}`;
        })
        .catch((error) => {
          console.error(error);
          alert("일기 전송 실패.");
        });
  };

  const handleCaffeineIntake = (e) => {
    setInputCaffeineIntake(parseInt(e.target.value,10));
  };
  const [selectedCaffeineIntake, setInputCaffeineIntake] = useState(0);

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
    setInputPillDosage(parseInt(e.target.value,10));
  };
  const [inputPillDosage, setInputPillDosage] = useState(0);

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
                {formattedDate}
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
                    <div className="mt-6 space-y-2">
                      {caffeineIntake.map((item) => (
                          <div key={item.value} className="flex items-center gap-x-3">
                            <input
                                id={item.value}
                                name="caffeineIntake"
                                type="radio"
                                checked={item.value === selectedCaffeineIntake}
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                onChange={handleCaffeineIntake}
                                value={item.value}
                            />
                            <label
                                htmlFor={item.value}
                                className="block text-sm font-medium leading-6 text-gray-900"
                            >
                              {item.name}
                            </label>
                          </div>
                      ))}
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
                      <div
                          className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
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
                    💪Workout
                  </legend>
                </div>

                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                  <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                    <label
                        htmlFor="exercise"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      💪Workout total time⏱️
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
                        <select
                            id="pill"
                            name="pill"
                            className="mt-2 block w-full text-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            value={inputPill}
                            onChange={handlePill}
                        >
                          {pill.map((item) => (
                              <option key={item.value} value={item.value}>
                                {item.name}
                              </option>
                          ))}
                        </select>
                      </div>
                      <fieldset>
                        <p className="mt-1 font-semibold text-sm leading-6 text-gray-600">
                          Dosage
                        </p>
                        <div className="mt-2 flex flex-row gap-2">
                          {pillDosage.map((item) => (
                              <div
                                  key={item.value}
                                  className="flex items-center gap-x-3"
                              >
                                <input
                                    id={item.value}
                                    name="pillDosage"
                                    type="radio"
                                    checked={item.value === inputPillDosage}
                                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                                    onChange={handlePillDosage}
                                    value={item.value}
                                />
                                <label
                                    htmlFor={item.value}
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                  {item.name}
                                </label>
                              </div>
                          ))}
                        </div>
                      </fieldset>
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
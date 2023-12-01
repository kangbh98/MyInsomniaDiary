import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const caffeineIntake = [
  { value: 'none', name: 'None' },
  { value: '100', name: '100' },
  { value: '150', name: '150' },
  { value: '200', name: '200' },
  { value: '250', name: '250' },
  { value: '300', name: '300' },
];

const pillDosage = [
  { value: '1', name: '1' },
  { value: '2', name: '2' },
  { value: '3', name: '3' },
];

const pill = [
  { value: 'none', name: 'none'},
  { value: 'type1', name: 'type1' },
  { value: 'type2', name: 'type2' },
  { value: 'type3', name: 'type3' },
];

function Write() {
  const navigate = useNavigate();//페이지 이동을 위해 네비게이트 함수 가져오기
  const [post, setPost] = useState({//내가 쓰려는 데이터 값들 + 디폴트값
    caffeineIntake: 'none',
    caffeineIntakeTime: '',
    exercise: '',
    exerciseTime: '1',
    pill: 'none',
    pillDosage: '1',
    SleepTime: '',
    wakeUpTime: '',

  })
const handleInput = (event) => {
  setPost({ ...post, [event.target.name]: event.target.value });
};//이벤트 객체에 대해 이름, 값 가져오고 post 업데이트
  function handleSubmit(event){
    event.preventDefault()//버튼 누르면 새로고침 되는 현상 방지
    axios.post('https://localhost:8080/generate/sleepDiary', {post})//포스트 하는 주소 기입
    .then(response => {
      console.log(response);//로그 띄우기
      navigate('/WriteDiary');// 창 이동 => Write Diary로
    })
    .catch(err=>console.log(err)) // 에러뜨면 에러 캐치
  }

  return (
    <>
      <form className="pb-32" onSubmit={handleSubmit}>
        <div className="space-y-4">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              2023.11.07
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
                      <div
                        key={item.value}
                        className="flex items-center gap-x-3"
                      >
                        <input
                          id={item.value}
                          name="caffeineIntake"
                          type="radio"
                          defaultChecked={item.value === 'none'}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          onChange={handleInput}
                          value = {item.value}
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
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="caffeineIntakeTime"
                        id="caffeineIntakeTime"
                        autoComplete="caffeineIntakeTime"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
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
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="exercise"
                        id="exercise"
                        autoComplete="exercise"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
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
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="exerciseTime"
                        id="exerciseTime"
                        autoComplete="exerciseTime"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
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
                        defaultValue="none"
                        onChange={handleInput}
                      >
                        {pill.map((item) => (
                          <option key={item.value}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <fieldset>
                      <p className="mt-1 font-semibold text-sm leading-6 text-gray-600">
                        dosage
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
                              defaultChecked={item.value === '1'}
                              className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              onChange={handleInput}
                              value = {item.value}
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
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="SleepTime"
                        id="SleepTime"
                        autoComplete="SleepTime"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900
                        placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
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
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="wakeUpTimev"
                        id="wakeUpTime"
                        autoComplete="wakeUpTime"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
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
          

            <button className='py-3 px-6 ring-1 
          rounded-lg bg-indigo-500 ring-indigo-200 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500 text-center flex items-center justify-center font-semibold text-sm font-semibold leading-6 text-gray-900 btn btn-primary'>Next</button>
        </div>
      </form>
    </>
  );
}

export default Write;

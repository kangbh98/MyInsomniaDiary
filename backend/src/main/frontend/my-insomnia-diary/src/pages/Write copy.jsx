import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

const caffeineDosage = [
  { value: 'none', name: 'None' },
  { value: '1', name: '1' },
  { value: '2', name: '2' },
  { value: '3', name: '3' },
  { value: '4over', name: 'more than 4' },
];

const pillDosage = [
  { value: '1', name: '1' },
  { value: '2', name: '2' },
  { value: '3', name: '3' },
];

const pillType = [
  { value: 'none', name: 'none'},
  { value: 'type1', name: 'type1' },
  { value: 'type2', name: 'type2' },
  { value: 'type3', name: 'type3' },
];

function Write() {
  const [post, setPost] = useState({
    caffeine_dosage: 'none',
    lastDosageC: '',
    Workout_total: '',
    pillDosage: '1',
    pillType: 'none',
    Wakeup: '',
    Sleep_Time: '',
    about: '',


  })
const handleInput = (event) => {
  setPost({ ...post, [event.target.name]: event.target.value });
};
  function handleSubmit(event){
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts', {post})
    .then(response => console.log(response))
    .catch(err=>console.log(err))
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
                    Caffeine Dosage (Cup)
                  </p>
                  <div className="mt-6 space-y-2">
                    {caffeineDosage.map((item) => (
                      <div
                        key={item.value}
                        className="flex items-center gap-x-3"
                      >
                        <input
                          id={item.value}
                          name="caffeine_dosage"
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
                    htmlFor="lastDosageC"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last Dosage time (H before sleep)
                  </label>
                  <div className="mt-2 flex flex-row justify-end">
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="lastDosageC"
                        id="lastDosageC"
                        autoComplete="lastDosageC"
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
                    htmlFor="Workout_total"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Workout total time
                  </label>
                  <div className="mt-2 flex flex-row justify-end">
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="Workout_total"
                        id="Workout_total"
                        autoComplete="Workout_total"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
                        />
                    </div>
                    <span className="my-auto ml-2">h</span>
                  </div>
                </div>

                <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                  <label
                    htmlFor="last_Workout"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Last Workout time (H before sleep)
                  </label>
                  <div className="mt-2 flex flex-row justify-end">
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="last_Workout"
                        id="last_Workout"
                        autoComplete="last_Workout"
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
                        htmlFor="pillType"
                        className="block text-sm font-semibold leading-6 text-gray-900"
                      >
                        Type
                      </label>
                      <select
                        id="pillType"
                        name="pillType"
                        className="mt-2 block w-full text-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        defaultValue="none"
                        onChange={handleInput}
                      >
                        {pillType.map((item) => (
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
                        name="Sleep_Time"
                        id="Sleep_Time"
                        autoComplete="Sleep_Time"
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
                    htmlFor="Wakeup"
                    className="block text-sm font-semibold leading-6 text-gray-900"
                  >
                    Number of times you woke up
                  </label>
                  <div className="mt-2 flex flex-row justify-end">
                    <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                      <input
                        type="text"
                        name="Wakeup"
                        id="Wakeup"
                        autoComplete="Wakeup"
                        className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                        onChange={handleInput}
                        />
                    </div>
                    <span className="my-auto ml-2">times</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Diary */}
            <div className="pb-2">
              <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="about"
                    className="block text-md font-extrabold leading-6 text-gray-900"
                  >
                    Diary
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="about"
                      name="about"
                      rows={5}
                      className="block w-full rounded-md border-0 py-1 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                      onChange={handleInput}
                      />
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
          

            <button className='btn btn-primary'>Complete</button>
        </div>
      </form>
    </>
  );
}

export default Write;

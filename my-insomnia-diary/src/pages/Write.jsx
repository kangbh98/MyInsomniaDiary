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
  { value: 'type1', name: 'type1' },
  { value: 'type2', name: 'type2' },
  { value: 'type3', name: 'type3' },
];

function Write() {
  return (
    <form>
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
                    <div key={item.value} className="flex items-center gap-x-3">
                      <input
                        id={item.value}
                        name="caffeine-dosage"
                        type="radio"
                        defaultChecked={item.value === 'none'}
                        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                      />
                      <label
                        htmlFor="push-everything"
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
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last Dosage time (H before sleep)
                </label>
                <div className="mt-2 flex flex-row justify-end">
                  <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastDosage"
                      id="lastDosage"
                      autoComplete="lastDosage"
                      className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Workout total time
                </label>
                <div className="mt-2 flex flex-row justify-end">
                  <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastDosage"
                      id="lastDosage"
                      autoComplete="lastDosage"
                      className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="my-auto ml-2">h</span>
                </div>
              </div>

              <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                <label
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Last Workout time (H before sleep)
                </label>
                <div className="mt-2 flex flex-row justify-end">
                  <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastDosage"
                      id="lastDosage"
                      autoComplete="lastDosage"
                      className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
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
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Pill before your sleep
                </label>
                <div className="mt-2 flex flex-row justify-between">
                  <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-semibold leading-6 text-gray-900"
                    >
                      Type
                    </label>
                    <select
                      id="location"
                      name="location"
                      className="mt-2 block w-full text-xs rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue="type1"
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
                            name="pill-dosage"
                            type="radio"
                            defaultChecked={item.value === '1'}
                            className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                          />
                          <label
                            htmlFor="push-everything"
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
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Total Sleep time
                </label>
                <div className="mt-2 flex flex-row justify-end">
                  <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastDosage"
                      id="lastDosage"
                      autoComplete="lastDosage"
                      className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="my-auto ml-2">h</span>
                </div>
              </div>

              <div className="sm:col-span-4 py-2 px-3 ring-1 rounded-lg ring-gray-200">
                <label
                  htmlFor="lastDosage"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Number of times you woke up
                </label>
                <div className="mt-2 flex flex-row justify-end">
                  <div className="w-12 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      name="lastDosage"
                      id="lastDosage"
                      autoComplete="lastDosage"
                      className="block flex-1 border-0 bg-transparent py-1 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <span className="my-auto ml-2">h</span>
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
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 pb-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Complete
        </button>
      </div>
    </form>
  );
}

export default Write;

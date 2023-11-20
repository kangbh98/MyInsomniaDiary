import { Link } from 'react-router-dom';

const genderMethods = [
  { id: 'male', title: '남자' },
  { id: 'feMale', title: '여자' },
];

const SignupUserInfo = () => {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto rounded-full"
            src="/images/main.jpg"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            회원가입
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-2" action="#" method="POST">
            <div>
              <label
                htmlFor="height"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                <span>키</span>
              </label>
              <div className="mt-2">
                <input
                  id="height"
                  name="height"
                  type="text"
                  autoComplete="height"
                  placeholder="ex) 175"
                  required
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="age"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                <span>나이</span>
              </label>
              <div className="mt-2">
                <input
                  id="age"
                  name="age"
                  type="text"
                  autoComplete="age"
                  required
                  placeholder="ex) 20"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-medium leading-6 text-gray-900 "
              >
                <span>몸무게</span>
              </label>
              <div className="mt-2">
                <input
                  id="weight"
                  name="weight"
                  type="text"
                  autoComplete="weight"
                  required
                  placeholder="ex) 70"
                  className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
              <div className="mt-2">
                <label className=" text-sm font-medium leading-6 text-gray-900 ">
                  성별
                </label>
                <fieldset className="mt-4">
                  <legend className="sr-only">성별</legend>
                  <div className="flex flex-row gap-6">
                    {genderMethods.map((gender) => (
                      <div key={gender.id} className="flex items-center">
                        <input
                          id={gender.id}
                          name="notification-method"
                          type="radio"
                          defaultChecked={gender.id === 'male'}
                          className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                        />
                        <label
                          htmlFor={gender.id}
                          className="ml-3 block text-sm font-medium leading-6 text-gray-900"
                        >
                          {gender.title}
                        </label>
                      </div>
                    ))}
                  </div>
                </fieldset>
              </div>
            </div>

            <div className="flex flex-row gap-3 py-20">
              <Link
                to="/"
                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                취소
              </Link>
              <Link
                to="/Login"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                완료
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignupUserInfo;

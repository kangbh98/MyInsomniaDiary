import { Link } from 'react-router-dom';

const First = () => {
  return (
    <div className="flex flex-col justify-center align-middle text-center h-full">
      <div className="flex flex-col justify-center gap-5 align-middle text-center">
        <div className="text-2xl font-extrabold">
          Your Daily Sleep at a Glance
        </div>
        <img
          src="/images/main.jpg"
          className="mx-auto w-52 sm:w-96 rounded-full"
          alt="main"
        />
        <div className="w-full justify-center flex flex-col gap-2">
          <Link
            to="/login"
            className="mx-auto w-52 sm:w-96 rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            LOGIN
          </Link>
          <Link
            to="/signup"
            className="mx-auto w-52 sm:w-96 rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
          >
            SIGN UP
          </Link>
        </div>
      </div>
    </div>
  );
};

export default First;

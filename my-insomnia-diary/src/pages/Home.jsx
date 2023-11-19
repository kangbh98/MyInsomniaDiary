import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col justify-center align-middle text-center h-full">
      <div className="flex flex-col justify-center gap-5 align-middle ">
        <div className="text-2xl font-extrabold">
          Your Daily Sleep at a Glance
        </div>
        <img
          src="/images/main.jpg"
          className="mx-auto w-96 rounded-full"
          alt="main"
        />
        <Link
          to="/login"
          type="button"
          className="rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          LOGIN
        </Link>
        <Link
          to="/signup"
          type="button"
          className="rounded bg-gray-500 px-2 py-2 text-md font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-500"
        >
          SIGN UP
        </Link>
      </div>
    </div>
  );
};

export default Home;

import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-24 px-10 gap-5">
      <span className="text-2xl font-extrabold text-center">
        Your Daily Sleep of a Glance
      </span>
      <Image
        className="rounded-full lg:w-96 lg:h-96"
        src="/main.jpg"
        width="500"
        height="500"
        alt=""
      />
      <button className="lg:w-96 w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        Log in
      </button>
      <button className="lg:w-96 w-full bg-gray-700 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        Sign up
      </button>
    </main>
  );
}

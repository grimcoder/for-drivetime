import Link from 'next/link';

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center">
      <h1 className="text-5xl font-bold text-red-600 mb-5">404 - Page Not Found</h1>
      <p className="text-lg mb-5">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link href="/">
        <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 font-semibold">
          Go Back Home
        </a>
      </Link>
    </div>
  );
};

export default Custom404;

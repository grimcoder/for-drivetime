import Link from 'next/link';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-5 text-center">
      <h1 className="text-36px font-bold text-customBlue mb-5">
        Welcome to Lithia Motors Service!
      </h1>
      <img
        src="/car-service.png"
        alt="Car Service"
        className="w-[460px] h-auto mb-5"
      />
      <p className="text-[16px] bg-black-400 font-normal  mb-5 max-w-lg">
        Lithia motors wants to put you in full control of your car-owning
        experience by providing easy to book service appointments from the
        comfort of your own home!
      </p>
      <Link href="/services">
        <div className="w-[267px] font-bold h-[47px] flex flex-col items-center 
        justify-center  bg-customBlue text-white px-4 py-2 rounded hover:bg-blue-700">
          <div className='text-14px'>Get Started</div>
        </div>
      </Link>
    </div>
  );
};

export default HomePage;
